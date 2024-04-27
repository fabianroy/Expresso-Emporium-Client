import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import ErrorPage from './components/ErrorPage';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee'),
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/user'),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
