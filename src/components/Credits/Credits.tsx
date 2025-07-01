import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Line, ActionLine } from "./Credits.style";

const Credits: React.FC = () => {
  const urlCredits = "https://storyset.com/online";
  return (
    <Stack spacing={1}>
      <Link to={urlCredits} target="_blank">
        <ActionLine>Online illustrations by Storyset</ActionLine>
      </Link>
      <Line>&copy;2023 StamperLabs, All rights reserved.</Line>
      <Line>Build with Material UI 🇨🇴 Colombia</Line>
    </Stack>
  );
}

export default Credits;