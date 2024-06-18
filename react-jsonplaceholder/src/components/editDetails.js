import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({ title: '', body: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items'));
        const currentItem = storedItems.find(item => item.id === parseInt(id));
        setItem(currentItem);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedItems = JSON.parse(localStorage.getItem('items'));
        const updatedItems = storedItems.map(storedItem =>
            storedItem.id === parseInt(id) ? item : storedItem
        );
        localStorage.setItem('items', JSON.stringify(updatedItems));
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