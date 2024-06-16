import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({ title :"", body: ""});
    const navigate = useNavigate();

    useEffect(() => {

        const fetchItem = async () => {
            try{
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setItem(res.data);
            } catch (error) {
                console.error("Error occured while fetching the item", error)
            }
        };
        fetchItem();
    },[id]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, item);
        navigate(`/item/${id}`);
    } catch (error) {
        console.error("Error occured while updating the item", error)
    }
   
  };

  return (
    <div>
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={item.title} onChange={handleChange} />
        </div>
        <div>
          <label>Body</label>
          <textarea name="body" value={item.body} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditItem;
