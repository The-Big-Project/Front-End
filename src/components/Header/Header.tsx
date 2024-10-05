/** @format */

import useLanguages from "../../hooks/useLanguage";
import HeaderButton from "./components/HeaderButton";
import styles from "./style.module.css";
import language from "@/assets/languages/dashboardSource";

export default function Header() {
  const lang = useLanguages();
  return (
    <header className={styles.header}>
      <HeaderButton to="/login">{language[lang].sell}</HeaderButton>
      <HeaderButton to="inventory">{language[lang].inventory}</HeaderButton>
      <HeaderButton to="/login">{language[lang].reports}</HeaderButton>
      <HeaderButton to="/login">{language[lang].clients}</HeaderButton>
      <HeaderButton to="/login">{language[lang].settings}</HeaderButton>
    </header>
  );
}
