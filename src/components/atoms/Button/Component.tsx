import Button from "@mui/material/Button";
import { Props } from "./Props";
import styles from "./styles.module.scss";

function Component({
  type = "basic",
  className,
  clickable = true,
  shape = "square",
  ...restProps
}: Props) {
  const { notClickable } = styles;

  if (!clickable) className = `${className} ${notClickable}`;

  return (
    <>
      <Button
        {...restProps}
        className={` ${className} ${styles[shape]} ${styles[type]}`}
        style={{
          paddingBlock: 10,
          textTransform: "none",
        }}
      />
    </>
  );
}

export default Component;
