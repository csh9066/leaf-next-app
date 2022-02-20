import React from "react";
import s from "./CheckBox.module.scss";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: () => void;
  className?: string;
}

function Checkbox({ children, checked = false, onChange, className }: Props) {
  const rootClassName = cn(s.root, className);

  return (
    <div className={rootClassName}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label onClick={onChange}>{children}</label>
    </div>
  );
}

export default Checkbox;
