/** @format */
import styles from "./style.module.css";
import classNames from "classnames";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ButtonType = "primary" | "secondary" | "teritarry" | "danger";
type IconPosition = "start" | "end";

type ButtonPropsWithoutIcon<T extends ElementType> = {
  styleType: ButtonType;
  as?: T;
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

type ButtonPropsWithIcon<T extends ElementType> = {
  icon: ReactNode;
  iconPosition: IconPosition;
} & ButtonPropsWithoutIcon<T>;

type ButtonProps<T extends ElementType> =
  | ButtonPropsWithoutIcon<T>
  | ButtonPropsWithIcon<T>;

export default function Button<E extends ElementType>({
  styleType,
  icon,
  iconPosition,
  as,
  className,
  children,
  ...props
}: ButtonProps<E>) {
  const Component = as || "button";
  const finalClass = classNames(styles[styleType], className);
  return (
    <Component {...props} className={finalClass}>
      {iconPosition === "start" && <span>{icon}</span>}
      {children}
      {iconPosition === "end" && <span>{icon}</span>}
    </Component>
  );
}
