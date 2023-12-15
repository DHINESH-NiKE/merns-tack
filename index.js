import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Register from './Pages/Register';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element = {<Home/>}/>
    <Route path='login' element = {<Login/>}/> 
    <Route path='register' element = {<Register/>}/>

  </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
