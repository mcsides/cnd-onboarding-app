import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LandingPageFrame = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr auto",
}));