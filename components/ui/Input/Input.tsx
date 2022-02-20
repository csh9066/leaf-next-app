import React from "react";
import s from "./Input.module.scss";
import cn from "classnames";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  block?: boolean;
}

function Input({ block = true, ...props }: Props) {
  const className = cn(s.root, props.className, {
    [s.block]: block,
  });
  return <input {...props} className={className} />;
}

export default Input;
