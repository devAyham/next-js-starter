import { createTheme } from "@mui/material";
import { breakPoints } from "constants/breakPoints";
import vars from "../variables/_main_colors_vars.module.scss";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: vars.primary_color_1,
    },
    secondary: {
      main: vars.secondary_color,
    },
    error: {
      main: vars.errors_color_1,
    },
    warning: {
      main: vars.warning_dark,
    },
  },
  breakpoints: {
    values: {
      ...breakPoints,
    },
  },
});
