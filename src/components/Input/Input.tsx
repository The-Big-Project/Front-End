/** @format */
import ClassNames from "classnames";
import styles from "./style.module.css";

import {
  forwardRef,
  useId,
  type ReactNode,
  type ComponentPropsWithRef,
  type Ref,
  useState,
} from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

type InputProps = {
  inputType: "text" | "password" | "email" | "phone" | "number";
  icon?: ReactNode;
  children?: ReactNode;
  inputClassName?: string;
  wrapperClassName?: string;
} & ComponentPropsWithRef<"input">;

function Input(
  {
    inputType,
    children,
    inputClassName,
    wrapperClassName,
    icon,
    ...props
  }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const id = useId();

  const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);

  const wrapperClass = ClassNames(styles.wrapper, wrapperClassName);
  const inputClass = ClassNames(
    styles.input,
    { [styles.indentedInput]: icon },
    inputClassName
  );

  const dynamicType =
    inputType === "password" && isPasswordRevealed
      ? "text"
      : inputType === "password" && !isPasswordRevealed
      ? "password"
      : inputType;

  return (
    <label className={wrapperClass} htmlFor={id + props.id || ""}>
      <span className={styles.indicator}>{children}</span>
      {icon && <span className={styles.preIcon}>{icon} |</span>}
      <input
        type={dynamicType}
        id={id + props.id || ""}
        className={inputClass}
        autoComplete="off"
        ref={ref}
        {...props}
      />
      <span className={styles.eye}>
        {inputType === "password" && (
          <span onClick={() => setIsPasswordRevealed((pre) => !pre)}>
            {isPasswordRevealed ? <BsEyeSlashFill /> : <BsEyeFill />}
          </span>
        )}
      </span>
    </label>
  );
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
