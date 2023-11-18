import { ReactNode } from "react";

export interface Props {
  Authenticated: ReactNode | false;
  NotAuthenticated: ReactNode | false;
}
