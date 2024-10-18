/** @format */

import InventoryLowerPart from "./components/InventoryLowerPart";
import Subhead from "./components/Subhead";
import { SearchProvider } from "./contexts/SearchContext";
import styles from "./styles/main.module.scss";

export default function Inventory() {
  return (
    <SearchProvider>
      <div className={styles.inventoryContainer}>
        <Subhead />
        <InventoryLowerPart />
      </div>
    </SearchProvider>
  );
}
