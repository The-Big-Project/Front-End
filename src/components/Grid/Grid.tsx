/** @format */

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./style.module.css";
import classNames from "classnames";

type GridProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function Grid({ children, ...props }: GridProps) {
  const finalClassName = classNames(styles.grid, props.className);
  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
}
