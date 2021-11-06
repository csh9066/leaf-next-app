import React, { ReactElement } from "react";
import cn from "classnames";
import s from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined-primary" | "ghost";
}

function Button({
  children,
  className,
  variant = "primary",
  ...props
}: Props): ReactElement {
  const rootClassName = cn(
    s.root,
    {
      [s.outlinedPrimary]: variant === "outlined-primary",
      [s.ghost]: variant === "ghost",
    },
    className
  );

  return (
    <button className={rootClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
