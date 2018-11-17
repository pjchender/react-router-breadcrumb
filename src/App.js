import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Books, Electronics } from './pages';
import { Navbar } from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
      </div>
    );
  }
}

export default App;
