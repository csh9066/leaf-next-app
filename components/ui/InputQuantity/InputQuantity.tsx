import { useState } from "react";
import s from "./InputQuantity.module.scss";

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
  minValue = 0,
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
      <button className={s.btn} onClick={onLocalDecrase}>
        -
      </button>
      <input
        className={s.input}
        type="value"
        value={localValue}
        onChange={onLocalChange}
      />
      <button className={s.btn} onClick={onLocalIncrase}>
        +
      </button>
    </div>
  );
}

export default InputQuantity;
