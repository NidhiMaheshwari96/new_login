import React from "react";
import Home from "./home";
import Login from "./login";
import Employee from "./employee";





export const Routes =[

    {
        path : "/",
        element : <Home/>,
    },
    {
        path : "/employee",
        element : <Employee/>,
    },
    
];

export const authRoutes =[

    {
        path : "/login",
        element : <Login/>,
    },
];