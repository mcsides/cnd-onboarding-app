import React from "react"
import { LandingPageFrame } from "./Landing.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LandingPage: React.FC = () => {
  return (<LandingPageFrame>
    <Header/>
    <Footer/>
  </LandingPageFrame>);
}

export default LandingPage;