"use client";
import { Props } from "./Props";

function HOC({ Authenticated, NotAuthenticated }: Props) {
  // must check if the user is authenticated in some how
  return <>{true ? <> {Authenticated}</> : <> {NotAuthenticated}</>}</>;
}

export default HOC;
