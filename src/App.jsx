import React from 'react';
import './App.css'
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import PaymentComponent from './pages/newAppointment/NewAppointment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "users", element: <UserList /> },
      { path: "user/:userID", element: <User /> },
      {path: 'newUser', element: <NewUser/>},
      {path: 'patients', element: <ProductList/>},
      { path: "product/:productID", element: <Product  /> },
      {path: 'newpatient', element: <NewProduct/>},
      {path: 'create_appointment/:id', element: <PaymentComponent/>},
    ],
  },
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
