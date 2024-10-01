/** @format */

import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

type HeaderButtonProps = {
  to: string;
  children: ReactNode;
};

export default function HeaderButton({ to, children }: HeaderButtonProps) {
  return (
    <NavLink to={to} className={styles.NavLink}>
      {children}
    </NavLink>
  );
}
