import { Stack } from "@mui/material";
import HeroImage from "../HeroImage/HeroImage";
import HeroLegend from "../HeroLegend/HeroLegend";
import React from "react"

const Hero: React.FC = () => {
  return (<Stack direction="row">
    <HeroLegend></HeroLegend>
    <HeroImage></HeroImage>
  </Stack>)
}

export default Hero;