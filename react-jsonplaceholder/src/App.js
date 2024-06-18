import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ItemList from './components/ItemList';
import ItemDetail from './components/itemDetail';
import EditItem from './components/editDetails';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/edit/:id" element={<EditItem />}/>
        </Routes>
    </Router>
  );
}

export default App;
