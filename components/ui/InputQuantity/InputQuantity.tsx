import { useState } from "react";
import s from "./InputQuantity.module.scss";
import cn from "classnames";

interface IProps {
  value: number;
  onIncrase?: () => void;
  onDecrase?: () => void;
  setValue?: (v: number) => void;
  minValue?: number;
  maxValue?: number;
}

function InputQuantity({
  value,
  onIncrase,
  onDecrase,
  setValue,
  minValue = 1,
  maxValue = 999,
}: IProps) {
  const [localValue, setLocalValue] = useState<number>(value || minValue);

  const onLocalIncrase = () => {
    if (localValue >= maxValue) {
      return;
    }
    setLocalValue((v) => v + 1);
    onIncrase && onIncrase();
  };

  const onLocalDecrase = () => {
    if (localValue <= minValue) {
      return;
    }
    setLocalValue((v) => v - 1);
    onDecrase && onDecrase();
  };

  const onLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    if (
      Number.isNaN(v) ||
      !Number.isSafeInteger(v) ||
      v > maxValue ||
      v < minValue
    ) {
      return;
    }
    setLocalValue(v);
    setValue && setValue(v);
  };

  return (
    <div className="flex">
      <button className={cn(s.btn, "rounded-l-xl")} onClick={onLocalDecrase}>
        -
      </button>
      <input
        className={s.input}
        type="value"
        value={localValue}
        onChange={onLocalChange}
      />
      <button className={cn(s.btn, "rounded-r-xl")} onClick={onLocalIncrase}>
        +
      </button>
    </div>
  );
}

export default InputQuantity;
