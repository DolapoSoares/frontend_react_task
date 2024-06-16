import React , { useEffect, useState} from "react";
import axios from 'axios';
import { Link, useParams, useNavigate} from 'react-router-dom';


const ItemDetail = () => {
    const { id } = useParams();
    const[item, setItem] = useState(null);
    const navigate = useNavigate();
   
    useEffect(() => {
        fetchItems();
    },[id]);

    const fetchItems = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(res.data)
        setItem(res.data)
    }

    const handleDelete = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        navigate('/');
    }
    return(
        <div>
            {item ? (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                    <Link to={`/edit/${item.id}`} >
                        <button>Edit</button>
                    </Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                ) : (
                    <p>Loading...</p>
                    )}
                   
        </div>
    )
}

export default ItemDetail;