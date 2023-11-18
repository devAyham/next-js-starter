import React, { useState } from "react";
import { Props } from "./Props";
import styles from "./styles.module.scss";
function Component({ open, setOpen }: Props) {
  
  return (
    <div
      className={`${styles.toggle} ${open && styles.active}`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </div>
  );
}

export default Component;
