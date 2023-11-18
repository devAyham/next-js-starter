import React from "react";
import { Props } from "./Props";
import styles from "./styles.module.scss";
function Component({
  children,
  className,
  animationDelay = 0,
  ...restProps
}: Props) {
  return (
    <div
      style={{
        animationDelay: `${animationDelay}s`,
      }}
      className={`${styles.container} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Component;
