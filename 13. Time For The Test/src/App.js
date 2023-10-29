import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact-portal";
import Error from "./Components/Error";
import RestrauntMenu from "./Components/RestrauntMenu";
import ErrorBoundary from "./Components/ErrorBoundary";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";
import { UserContextProvider,userContext } from "./utils/context/userDataContext";
import { useState } from "react";
import { useEffect } from "react";
// import Grocery from "./Components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore/store";
import Cart from "./Components/Cart";
import ThankYouPage from "./Components/ThankYouPage";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const status = useOnlineStatus();

  const [user,setUser] = useState('')

  useEffect(() => {
    const data = {
      name : "Vivek Kumar"
    }
    setUser(data.name)
  },[])

  return (
    <>
    <Provider store={appStore}>
      <ErrorBoundary>
        <div className="w-auto">
          <userContext.Provider value={{user,setUser}}>
            <Header />
          </userContext.Provider>
          {status === false ? (
            <UserContextProvider>
              <Outlet />
            </UserContextProvider>
          ) : (
            <h1>
              Looks Like You Are Offline!! Please Check Your Internet
              Connection.
            </h1>
          )}
        </div>
      </ErrorBoundary>
    </Provider>
    </>
  );
};

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : "/cart",
        element : <Cart />
      },
      {
        path : '/thankyou',
        element : <ThankYouPage />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp} />);
