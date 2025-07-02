import { styled, Container, Toolbar } from "@mui/material";

export const HeaderContainer = styled(Container)(() => ({
    height: "80px",
    display: "flex"
}))

export const HeaderToolbar = styled(Toolbar)(() => ({
    flex: 1,
    justifyContent: "space-between",
}))
