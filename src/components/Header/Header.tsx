import React from "react";
import { HeaderContainer, HeaderToolbar } from "./Header.style";
import { AppBar, Button, Typography } from "@mui/material";

const Header: React.FC = () => {
    return(
        <AppBar position="static">
            <HeaderContainer maxWidth="lg">
                <HeaderToolbar disableGutters={true}>
                    <Typography variant="h6" component="div">
                        Connduct
                    </Typography>
                    <Button color="inherit" variant="outlined" >
                        Start for free
                    </Button>
                </HeaderToolbar>
            </HeaderContainer>
        </AppBar>
    )
}

export default Header;