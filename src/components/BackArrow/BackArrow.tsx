/** @format */

import { ComponentPropsWithoutRef, useState } from "react";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";

type BackArrow = ComponentPropsWithoutRef<"span">;

export default function BackArrow(props: BackArrow) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {hover ? (
        <BsArrowLeftCircleFill size="30px" />
      ) : (
        <BsArrowLeftCircle size="30px" />
      )}
    </span>
  );
}
