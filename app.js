import React from "react";
import  ReactDOM  from "react-dom/client";
import { Home } from "./src/components/Home.js";
import { Auth } from "./src/components/Auth.js";
import { Loading } from "./src/components/Loading.js";
import Option from "./src/components/Option.js";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/home",
        element:<Home />
    },
    {
        path: "/auth",
        element:<Auth />
    },
    {
        path: "/loading",
        element:<Loading />
    },
    {
        path: "/options",
        element:<Option  />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);