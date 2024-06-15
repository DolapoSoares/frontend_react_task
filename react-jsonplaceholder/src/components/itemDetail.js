import React , { useEffect, useState} from "react";
import axios from 'axios';
import { useParams, useHistory} from `react-router-dom`
import { Link } from "react-router-dom";

const ItemDetail = () => {

    const { id } = useParams();
    const[item, setItem] = useState(null);
    const history = useHistory();
   
    useEffect(() => {
        fetchItems();
    },[id]);

    const fetchItems = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/guide/`);
        setItem(res.data)
    }

    const handleDelete = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/guide/`);
        history.push('/');
    }
    return(
        <div>
            {item ? (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                    <Link  >
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