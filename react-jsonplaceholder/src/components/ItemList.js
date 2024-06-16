import React , { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom"

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        fetchItems(loading);
    },[loading]);

    const fetchItems = async (loading) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${loading}&_limit=10`);
        setItems(res.data)
    }

    const nextPage = () => {
        setLoading(loading + 1)
    };

    const previousPage = () => {
        if(loading > 1) {
            setLoading(loading - 1);
    }
    };

    return(
        <div>
            <h1>Items List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={`/item/${item.id}`}>{item.title}</Link>
                    </li>
                    ))}
            </ul>
            <button onClick={previousPage} disabled={loading === 1}>Previous</button>
            <button onClick={nextPage}>Next</button>
            
        </div>
    )
};

export default ItemList;