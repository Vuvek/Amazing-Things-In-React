import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact-portal";
import Error from "./Components/Error";
import RestrauntMenu from "./Components/RestrauntMenu";
import ErrorBoundary from "./Components/ErrorBoundary";




const AppLayout = () => {
  return (
    <>
    <ErrorBoundary>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </ErrorBoundary>
    </>
  );
};

const routerApp = createBrowserRouter([

  {
    path : '/',
    element : <AppLayout />,
    children : [
      {
        path : '/',
        element : <Body />
      },
      {
        path : '/about',
        element : <About />
      },{
        path : '/contact',
        element : <Contact />
      },
      {
        path : '/restaurants/:resId',
        element : <RestrauntMenu />
      }
    ],
    errorElement : <Error />,
  },
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp}/>);
