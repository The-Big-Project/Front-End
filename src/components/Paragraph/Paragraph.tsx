/** @format */

import { ComponentPropsWithoutRef, type ReactNode } from "react";
import styles from "./style.module.css";
import ClassNames from "classnames";

type ParagraphType = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"p">;

export default function Paragraph({
  children,
  className,
  ...props
}: ParagraphType) {
  const finalClassName = ClassNames(styles.paragraph, className);
  return (
    <p className={finalClassName} {...props}>
      {children}
    </p>
  );
}
