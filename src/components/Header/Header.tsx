import React from "react";
import { HeaderBar } from "./Header.style";
import { Container, AppBar, Typography } from "@mui/material";

const Header: React.FC = () => {
    return(
        <AppBar position="static">
            <Container maxWidth={"lg"}>
                <HeaderBar disableGutters={true}>
                <Typography variant="h6" component="div">
                    Connduct
                </Typography>
                </HeaderBar>
            </Container>
        </AppBar>
    )
}

export default Header;