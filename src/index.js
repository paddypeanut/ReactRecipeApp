import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RouteLayout from "./routes/RouteLayout";
import ShowByCategoryPage, {loader as categoryLoader } from "./routes/ShowByCategoryPage";
import {loader as MealLoader }from "./components/MealDetails/MealDetails";
import HomePage from "./routes/HomePage";
import DetailsPage from "./routes/DetailsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    children: [
      {
        path:'/',
        element: <HomePage />
      },
          {
            path:'/category/:cat',
            element: 
             <ShowByCategoryPage itemsPerPage={5} />,
            loader: categoryLoader,
          },
          {
            path:'/meal/:mealId',
            element: <DetailsPage />,
            loader: MealLoader
          } 
        
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

