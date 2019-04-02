import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const home = () => {
  return <h2>Home</h2>;
};

const today = () => {
  return <h2>Today's notifications!</h2>;
};

const week = () => {
  return <h2>This week's notifications!</h2>;
};

const month = () => {
  return <h2>This month's notifications!</h2>;
};

const showAll = () => {
  return <h2>Show all notifications!</h2>;
};

const addNew = () => {
  return <h2>Add New</h2>;
};

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="App-link">
            Home
          </Link>{' '}
          |
          <Link to="/today" className="App-link">
            Today
          </Link>{' '}
          |
          <Link to="/week" className="App-link">
            Week
          </Link>{' '}
          |
          <Link to="/month" className="App-link">
            Month
          </Link>{' '}
          |
          <Link to="/showAll" className="App-link">
            Show All
          </Link>{' '}
          |
          <Link to="/addNew" className="App-link">
            Add New
          </Link>
        </nav>
        <Route path="/" exact component={home} />
        <Route path="/today/" component={today} />
        <Route path="/week/" component={week} />
        <Route path="/month/" component={month} />
        <Route path="/showAll/" component={showAll} />
        <Route path="/addNew/" component={addNew} />
      </div>
    </Router>
  );
};
