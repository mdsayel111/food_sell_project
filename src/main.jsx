import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Foods from './components/Foods/Foods.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test from './components/Test/Test.jsx'
import Food from './components/Food/Food.jsx'
import FoodDeatails from './components/FoodDetails/FoodDeatails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    loader: ()=> fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    element: <App></App>,
    children:[
      {
        path : "/",
        loader:  ()=> fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element:<Foods></Foods>
      },
      {
        path: "/foods/:foodType",
        loader: ({params:{foodType}}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodType}`),
        element: <FoodDeatails></FoodDeatails>
      } ,
      {
        path: "/about",
        element: <div>hellow about</div>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
