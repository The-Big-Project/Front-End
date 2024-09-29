/** @format */

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./style.module.css";

type ErrorMessageProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"p">;

export default function ErrorMessage({
  children,
  ...props
}: ErrorMessageProps) {
  return (
    <Paragraph className={styles.error} {...props}>
      {children}
    </Paragraph>
  );
}
