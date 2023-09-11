import * as React from "react";
import { Font } from ".";

const Text = ({ font = Font.body, children }) => {
  return <span className={`font-${font}`}>{children}</span>;
};

export default Text;
