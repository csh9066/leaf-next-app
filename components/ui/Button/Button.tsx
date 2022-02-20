import React, { ReactElement } from "react";
import cn from "classnames";
import s from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined-primary" | "ghost";
  block?: boolean;
  size?: "sm" | "base";
}

function Button({
  children,
  className,
  variant = "primary",
  block = true,
  size = "base",
  ...props
}: Props): ReactElement {
  const rootClassName = cn(
    s.root,
    {
      [s.outlinedPrimary]: variant === "outlined-primary",
      [s.ghost]: variant === "ghost",
      [s.block]: block,
      [s.sm]: size === "sm",
      [s.base]: size === "base",
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
