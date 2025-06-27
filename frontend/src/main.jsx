import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import FilterContextProvider from './main/context/FilterContent.jsx'
import { useContext } from 'react'
import UserContextProvider from './context/UserContext.jsx';
createRoot(document.getElementById('root')).render(

   <BrowserRouter>
   <UserContextProvider>
   <FilterContextProvider>
    <App />
   </FilterContextProvider>
   </UserContextProvider>
 </BrowserRouter>
  
)
