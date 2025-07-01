import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ActionLine = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.action.active,
  textAlign: "center",
}));

export const Line = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  textAlign: "center",
}));
