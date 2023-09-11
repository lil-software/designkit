import * as React from "react";
import { ButtonVariant } from ".";
import Text from "./Text";

const Button = ({ variant = ButtonVariant.primary, children }) => {
  return (
    <button>
      <Text>{children}</Text>
    </button>
  );
};

export default Button;
