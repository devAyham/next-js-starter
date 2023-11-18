import { IsHeaderOpenContext } from "providers";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { Link, Typography } from "../../../server/atoms";
import { Props } from "./Props";
import styles from "./styles.module.scss";

function Component({ href, children, ...restprops }: Props) {
  const { isHeaderOpen, setIsHeaderOpen } = useContext(IsHeaderOpenContext);
  const pathname = usePathname();
  const routes = pathname.split("/").filter((_, index) => {
    return index !== 0;
  });

  const activeRoute = routes.some((route) => {
    return href.toString().includes(route);
  });
  const closeHeader = () => {
    if (isHeaderOpen) {
      setIsHeaderOpen(false);
    }
  };

  return (
    <Link {...restprops} href={href} onClick={closeHeader}>
      <Typography
        children={children}
        className={`${styles.item} ${activeRoute && styles.active}`}
      />
    </Link>
  );
}

export default Component;
