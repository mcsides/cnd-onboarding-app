import { Container, Stack } from "@mui/material";
import Hero from "../Hero/Hero";

const Main: React.FC = () => {
  return(
    <Container maxWidth="lg">
      <Stack>
        <Hero/>
      </Stack>
    </Container>
  );
}

export default Main;