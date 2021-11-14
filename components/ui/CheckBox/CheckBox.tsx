import React, { useMemo, useState } from "react";
import s from "./CheckBox.module.scss";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: () => void;
  className?: string;
}

function Checkbox({ children, checked = false, onChange, className }: Props) {
  const [localChcekd, setLocalChcekd] = useState(checked);
  const onLocalChange = () => {
    setLocalChcekd(!localChcekd);
    onChange && onChange();
  };

  const rootClassName = cn(s.root, className);

  return (
    <div className={rootClassName}>
      <input type="checkbox" checked={localChcekd} onChange={onLocalChange} />
      <label onClick={onLocalChange}>{children}</label>
    </div>
  );
}

export default Checkbox;
