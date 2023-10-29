import React from 'react'
import AppLayout from './src/App'
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);



