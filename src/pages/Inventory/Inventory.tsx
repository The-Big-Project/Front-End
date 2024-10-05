/** @format */

import InventoryLowerPart from "./components/InventoryLowerPart";
import Subhead from "./components/Subhead";
import styles from "./styles/main.module.css";

export default function Inventory() {
  return (
    <div className={styles.inventoryContainer}>
      <Subhead />
      <InventoryLowerPart />
    </div>
  );
}
