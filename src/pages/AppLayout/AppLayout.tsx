/** @format */

import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./style.module.css";

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
}
