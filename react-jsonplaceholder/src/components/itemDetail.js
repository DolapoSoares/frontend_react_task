import React , { useEffect, useState} from "react";
import axios from 'axios';
import { Link, useParams, useNavigate} from 'react-router-dom';


const ItemDetail = () => {
    const { id } = useParams();
    const[item, setItem] = useState(null);
    const navigate = useNavigate();
   
    useEffect(() => {
        const fetchItem = async () => {
            try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setItem(res.data)
            } catch (error) {
                console.error("Error ferching the details", error)
            }
        }
        fetchItem();
    },[id]);

    

    const handleDelete = async () => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            navigate('/');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
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