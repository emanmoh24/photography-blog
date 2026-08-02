import React from 'react'
import Home from './Pages/Home/Home'
import {BrowserRouter, Routes, Route} from "../node_modules/react-router"
import Privacy from './Pages/Privacy/Privacy'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Service from './Pages/Service/Service'
import Article from './Pages/Article/Article'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/Blog" element ={<Blog/>}></Route>
      <Route path="/About" element ={<About/>}></Route>
      <Route path="/Privacy" element ={<Privacy/>}></Route>
      <Route path="/Service" element ={<Service/>}></Route>
      <Route path="/Article" element ={<Article/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
