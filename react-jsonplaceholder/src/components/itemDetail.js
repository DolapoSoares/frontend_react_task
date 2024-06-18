import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items'));
        const currentItem = storedItems.find(item => item.id === parseInt(id));
        setItem(currentItem);
    }, [id]);

    const handleDelete = () => {
        const storedItems = JSON.parse(localStorage.getItem('items'));
        const updatedItems = storedItems.filter(item => item.id !== parseInt(id));
        localStorage.setItem('items', JSON.stringify(updatedItems));
        navigate('/');
    };

    return (
        <div>
            {item ? (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                    <Link to={`/edit/${item.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemDetail;
