/** @format */

import { useAppSelector } from "./reduxHooks";

export default function useLanguages(): string {
  const lang = useAppSelector((store) => store.language);
  return lang;
}
