import { routesType } from "types/routes.type";
import { LinkProps } from "../../../server/atoms/index";

export interface Props extends LinkProps {
  href: routesType;
}
