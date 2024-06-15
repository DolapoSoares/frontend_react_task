import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({ title :"", body: ""});
    const navigate = useNavigate();

    useEffect(() => {
        fetchItem();

    },[id]);


  const fetchItem = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/`);
    setItem(res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://jsonplaceholder.typicode.com/guide/`, item);
    navigate(`/item/${id}`);
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
