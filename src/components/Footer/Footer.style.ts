import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const FooterFrame = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  paddingBlock: theme.spacing(6),
}))