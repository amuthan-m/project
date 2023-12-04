import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Inter from './login';
import Bim from './Bim2';
import Sign from './SignUp';
import Ap from './st';
export default function Root() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/login' element={<Inter/>}></Route>
            <Route path='/Bim2' element={<Bim/>}></Route>
            <Route path='/SignUp' element={<Sign/>}></Route>
            <Route path='/st' element={<Ap/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}