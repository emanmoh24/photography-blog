import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";
import DiscoverSection from "../../Components/DiscoverSection/DiscoverSection";
import LatestArticlesSection from "../../Components/LatestArticlesSection/LatestArticlesSection";
import ChosenArticlesSection from "../../Components/ChosenArticlesSection/ChosenArticlesSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <ChosenArticlesSection />
      <DiscoverSection />
      <LatestArticlesSection />
      <Form />
      <Footer />
    </>
  );
}
