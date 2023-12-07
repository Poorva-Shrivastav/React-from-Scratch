import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import Header from "./components/Header";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
        element: <Contact />,
      },
      {
        path: "/restaurants/:restId",
        element: (
          <Suspense fallback={<h1>....Loading</h1>}>
            <RestaurantMenu />
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
