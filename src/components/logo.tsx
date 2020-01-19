/** @format */
import * as React from "react";

export interface iProps {
  collapsed: boolean;
}
export default function Logo({
  collapsed,
}: iProps): JSX.Element {
  console.log(collapsed);
  return (
    <div className="logo">
      {collapsed ? "Fire" : "Fire Hero"}
    </div>
  );
}
