import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from "react-helmet-async";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <div className="container mx-auto">
                <RouterProvider router={router} />
            </div>
        </HelmetProvider>
    </React.StrictMode>
);
