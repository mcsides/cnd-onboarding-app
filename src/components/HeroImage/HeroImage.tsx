import React from "react"
import { Container, Box } from "@mui/material";
import heroImg from "../../assets/winners.svg";

const HeroImage: React.FC = () => {
  return (<Container>
   <Box
      component="img"
      src={heroImg}
      alt="Tournament Hero"
      loading="lazy"
      sx={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
    />
  </Container>);
}

export default HeroImage;