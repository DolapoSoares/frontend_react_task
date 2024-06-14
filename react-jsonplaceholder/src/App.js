import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import EditItem from './components/EditItem';

function App() {
  return (
    <Router>
      <div className="Routes">
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/item/:id" component={ItemDetail} />
          <Route path="/edit/:id" component={EditItem}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
