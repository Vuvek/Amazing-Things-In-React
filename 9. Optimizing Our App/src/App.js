import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact-portal";
import Error from "./Components/Error";
import RestrauntMenu from "./Components/RestrauntMenu";
import ErrorBoundary from "./Components/ErrorBoundary";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"))

const AppLayout = () => {
  const status = useOnlineStatus()
  
  return (
    <>
    <ErrorBoundary>
      <div className="app">
        <Header />
        {status === false ? <Outlet /> : <h1>Looks Like You Are Offline!! Please Check Your Internet Connection.</h1>}
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
      },{
        path : '/grocery',
        element : <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
        </Suspense> 
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
