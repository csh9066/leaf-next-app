import React, { ReactElement } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  children?: any;
  el?: HTMLElement | string;
}

function Container({ className, children, el = "div" }: Props): ReactElement {
  const rootClassName = cn(className, "mx-auto max-w-xl w-full");

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;

  return <Component className={rootClassName}>{children}</Component>;
}

export default Container;
