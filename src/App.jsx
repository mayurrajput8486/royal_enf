import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'  
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Contact from './components/Pages/Contact.jsx'
import Home from './components/Pages/Home.jsx'
import Service from './components/Pages/Service.jsx'
import About from './components/Pages/About.jsx'
import ErrorPage from './components/Pages/ErrorPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import Enqdetails from './components/Pages/Enqdetails.jsx'
import Update from './components/Pages/Update.jsx'
import Delete from './components/Pages/Delete.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/show' element={<Enqdetails/>}></Route>
            <Route path='/update/:customerid' element={<Update/>}></Route>
            <Route path='/delete/:customerid' element={<Delete/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App