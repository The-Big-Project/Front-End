/** @format */
import { PiCloudWarningDuotone, PiPlugsConnectedFill } from "react-icons/pi";
import styles from "./style.module.css";
import { MdError } from "react-icons/md";
import type { ReactNode } from "react";
import classNames from "classnames";

type ErrorComponentProps = {
  errorType: "network" | "unknown" | "404";
  size?: number;
  direction?: "vertical" | "horizontal";
  children: ReactNode;
};

export default function ErrorComponent({
  errorType,
  size = 125,
  children,
  direction = "vertical",
}: ErrorComponentProps) {
  const finalClassName = classNames(styles.frame, {
    [styles.vertical]: direction === "vertical",
  });
  return (
    <div className={finalClassName}>
      {errorType === "network" && <PiPlugsConnectedFill size={size} />}
      {errorType === "404" && <PiCloudWarningDuotone size={size} />}
      {errorType === "unknown" && <MdError size={size} />}
      <span>{children}</span>
    </div>
  );
}
