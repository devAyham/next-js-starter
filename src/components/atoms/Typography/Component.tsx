import React from "react";
import { Typography } from "@mui/material";
import { Props } from "./Props";
import { isCustomTypoColor } from "types/customTypographyColors.type";
import styles from "./styles.module.scss";

function Component({ color, ...restProps }: Props) {
  if (isCustomTypoColor(color)) {
    return (
      <Typography
        {...restProps}
        className={`${restProps.className} ${styles[color]}`}
      />
    );
  }
  return <Typography {...restProps} color={color} />;
}

export default Component;
