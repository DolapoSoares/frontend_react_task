import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setItems(res.data);
                localStorage.setItem('items', JSON.stringify(res.data));
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        } else {
            fetchItems();
        }
    }, []);

    // Calculate the indices for the current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change pages
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {currentItems.map(item => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ItemList;