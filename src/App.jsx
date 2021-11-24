import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Outlet, ReactLocation, Link, useMatch } from 'react-location'

import "./index.scss";


const routes  = [
  {
    path: '/',
    element: <div> Home Page</div>
  },
  {
    path: '/about',
    element: <div> About Page</div>
  }
]

const location = new ReactLocation();


const App = () => (
    <Router routes={routes} location={location}>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Outlet />
        <Link to="about">Go to cart
        </Link>
      </div>
    </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
