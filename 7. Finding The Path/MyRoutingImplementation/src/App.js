import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import About from "./Components/About";
import DynamicAbout from "./Components/DynamicAbout";
import Root from "./Components/Root";
import NestedContactRoute from "./Components/NestedContactRoute";
import Contact from "./Components/Contact";
import Company from "./Components/Company";
import Chanel from "./Components/Chanel";
import Others from "./Components/Other";
import Protected from "./Components/Protected";
import Login from "./Components/Login";

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="" element={<Root />} />
          <Route path="/about/:id" element={<Protected><DynamicAbout /></Protected>} />
          <Route path="/about" element={<Protected><About /></Protected>} /> 
          <Route path="/login" element={<Login />} />
          
          {/* First way to create nested routes  */}
          <Route path="/contact/*" element={<Protected><NestedContactRoute /></Protected>} />

          {/* Second way to create routes */}
          <Route path="/contactroute2/" element={<Protected><Contact /></Protected>}>
            <Route path="company" element={<Company />} />
            <Route path="chanel" element={<Chanel />} />
            <Route path="other" element={<Others />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default AppLayout;





// *********************************************************** From Here Routing Latest Version Code Started *****************************************





const appRoute = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
  },
  {
    path : '/about',
    element : <About />,
  },
  {
    path : '/about/:id',
    element : <DynamicAbout />
  }
])