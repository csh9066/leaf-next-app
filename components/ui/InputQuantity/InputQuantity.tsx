import s from "./InputQuantity.module.scss";
import cn from "classnames";
import { ChangeEvent } from "react";

interface IProps {
  value: number;
  onIncrase?: () => void;
  onDecrase?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputQuantity({ value, onIncrase, onDecrase, onChange }: IProps) {
  return (
    <div className="flex">
      <button className={cn(s.btn, "rounded-l-xl")} onClick={onDecrase}>
        -
      </button>
      <input
        className={s.input}
        type="value"
        value={value}
        onChange={onChange}
      />
      <button className={cn(s.btn, "rounded-r-xl")} onClick={onIncrase}>
        +
      </button>
    </div>
  );
}

export default InputQuantity;
