import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import ArticleHead from '../../Components/ArticleHead/ArticleHead'
import ArticleBody from '../../Components/ArticleBody/ArticleBody'
import data from "../../../data/db.json"
import {useParams, useNavigate} from "../../../node_modules/react-router"
import { useEffect } from 'react'
import MightLikeSection from '../../Components/MightLikeSection/MightLikeSection'

export default function Article() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const article = data.posts.find((post) => String(post.id) === String(id));

  return (
    <>
      <Navbar/>
      <ArticleHead article ={article}/>
      <ArticleBody article ={article}/>
      <MightLikeSection/>
      <Footer/>
    </>
  )
}
