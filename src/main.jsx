/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/HomePage/Home';
import Layout from './components/Layout/Layout';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import ErrorPage from './components/Error404/ErrorPage';
// import Chefs from './components/HomePage/ChefSection/Chefs';
import ChefRecipe from './components/ChefRecipe/ChefRecipe';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Registration/>
      },
    
          {
            path:'chefrecipe/:id',
            element:<ChefRecipe/>,
            loader:({params})=>fetch(`http://localhost:5000/chefData/${params.id}`)
          }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
