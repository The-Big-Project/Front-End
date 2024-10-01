/** @format */
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import styles from "./style.module.css";
import classNames from "classnames";
import DashboardItemSide from "./DashboardItemSide";

type DashboardItemProps = {
  children: ReactElement;
  icon: ReactNode;
  direction?: "horizonatal" | "vertical";
} & ComponentPropsWithoutRef<"div">;

export default function DashboardItem({
  icon,
  direction,
  children,
  className,
}: DashboardItemProps) {
  const finalClass = classNames(styles.dashboardItem, className, {
    [styles.vertical]: direction === "vertical",
    [styles.horizontal]: direction === "horizonatal",
  });
  return (
    <div className={finalClass}>
      <div className={styles.iconContainer}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}
