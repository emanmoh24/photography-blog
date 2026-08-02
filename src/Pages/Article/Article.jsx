import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import ArticleHead from '../../Components/ArticleHead/ArticleHead'
import ArticleBody from '../../Components/ArticleBody/ArticleBody'

export default function Article() {
  return (
    <>
      <Navbar/>
      <ArticleHead/>
      <ArticleBody/>
      <Footer/>
    </>
  )
}
