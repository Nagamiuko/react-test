import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../page/Home';
import Setting from '../page/Setting';
const router = () => {
  return (
     <Routes>
       <Route index element={<Home/>}/>
       <Route path="/setting" element={<Setting/>}/>
     </Routes>
  )
}

export default router