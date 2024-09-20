import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics'
import Applied from './components/Applied/Applied';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
      path: '/statistics',
        element: <Statistics></Statistics>
    },
    {
      path: '/applied',
      element: <Applied></Applied>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    }
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
