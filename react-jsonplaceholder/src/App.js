import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetail from './components/itemDetail';
import EditItem from './components/editDetails';

function App() {
  return (
    <Router>
      <div className="Routes">
        <Routes>
          <Route exact path="/" component={ItemList} />
          <Route path="/item/:id" component={ItemDetail} />
          <Route path="/edit/:id" component={EditItem}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
