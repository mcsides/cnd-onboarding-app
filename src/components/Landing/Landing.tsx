import React from "react"
import { LandingPageFrame } from "./Landing.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main"
const LandingPage: React.FC = () => {
  return (<LandingPageFrame>
    <Header/>
    <Main/>
    <Footer/>
  </LandingPageFrame>);
}

export default LandingPage;