import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <>auth{children}</>;
}

export default layout;
