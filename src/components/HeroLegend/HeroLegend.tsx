import React from "react"
import { Stack, Typography, Button, Container } from "@mui/material";

const HeroLegend: React.FC = () => {
  return(
  <Container sx={{
        display: "flex",
        direction: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
    <Stack>
        <Typography variant={"h3"} color={"text.primary"} gutterBottom>
          Where great tournaments begin and legends are tracked
        </Typography>
        <Typography variant={"h6"} color={"text.primary"} gutterBottom>
          Create stunning tournaments, manage every round, track stats live, and share victories instantly.
        </Typography>
        <Button color="inherit" variant="outlined" >
          Start for free
        </Button>
      </Stack>
  </Container>
  );
}

export default HeroLegend;