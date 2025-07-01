import React from "react"
import { LandingPageFrame } from "./LandingPage.style";
import Header from "../Header/Header";

const LandingPage: React.FC = () => {
  return (<LandingPageFrame>
    <Header/>
  </LandingPageFrame>);
}

export default LandingPage;