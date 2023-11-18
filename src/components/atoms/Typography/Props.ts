import { TypographyProps } from "@mui/material";
import { customTypographyColorsType } from "types";

export interface Props extends TypographyProps {
  color?: TypographyProps["color"] | customTypographyColorsType;
}
