import { FooterFrame } from "./Footer.style"
import { Container } from "@mui/material"
import Credits from "../Credits/Credits";

const Footer: React.FC = () => {
  return (<FooterFrame>
    <Container maxWidth={"lg"}>
      <Credits/>
    </Container>
  </FooterFrame>)
}

export default Footer