import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx';
import Allcars from './components/allcars.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <Allcars></Allcars>
      },
      {
        path:'/page/:id',
        element: <Allcars></Allcars>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='bg-[#bfd3e780] dark:bg-black dark:text-white'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
