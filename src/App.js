import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import Header from "./components/Header";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserContextProvider } from "./utils/context/userContext";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const About = lazy(() => import("./components/About"));

const Contact = lazy(() => import("./components/Contact"));

const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContextProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
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
        element: (
          <Suspense fallback={<h1>....Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>....Loading Contact Info</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restId",
        element: (
          <Suspense fallback={<h1>....Loading</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>....Loading</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
// root.render(<AppLayout />); // Babel understands <></>, so we have to wrap our component inside them for rendering

root.render(<RouterProvider router={appRouter} />);
