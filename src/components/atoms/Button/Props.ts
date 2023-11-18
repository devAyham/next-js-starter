import { ButtonProps } from "@mui/material";
import { buttonShape } from "types/buttonShape.type";
import { buttonType } from "types/buttonTypes.type";

export interface Props extends Omit<ButtonProps, "type"> {
  type?: buttonType;
  clickable?: boolean;
  shape?: buttonShape;
}
