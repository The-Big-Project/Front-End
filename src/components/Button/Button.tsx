/** @format */
import styles from "./style.module.css";
import classNames from "classnames";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ButtonType = "primary" | "secondary" | "teritarry" | "danger";

type ButtonProps<T extends ElementType> = {
  styleType: ButtonType;
  as?: T;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Button<E extends ElementType>({
  styleType,
  icon,
  as,
  className,
  children,
  ...props
}: ButtonProps<E>) {
  const Component = as || "button";
  const finalClass = classNames(styles[styleType], className);
  return (
    <Component {...props} className={finalClass}>
      {icon && <span>{icon}</span>}
      {children}
    </Component>
  );
}
