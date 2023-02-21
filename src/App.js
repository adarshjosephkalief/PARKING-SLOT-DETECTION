import React, { useState } from "react";
import logo from './logo.svg';

import Auth from './Auth'
import { Home } from './home'
import Booking  from './booking'

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Auth />    
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/booking',
      element: <Booking />
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;