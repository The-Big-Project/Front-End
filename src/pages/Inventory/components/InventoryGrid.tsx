/** @format */

import type { inventoryItemType } from "../../../api/inventoryApi";
import Grid from "../../../components/Grid/Grid";
import InventoryItem from "./InventoryItem";
import styles from "../styles/main.module.css";
type InventoryGridProps = {
  data: inventoryItemType[] | undefined;
};

export default function InventoryGrid({ data }: Readonly<InventoryGridProps>) {
  const items = data?.map((item) => (
    <InventoryItem
      date={new Date(item.createdAt)}
      image={item.images?.[0]}
      origin={item.origin}
      quantity={item.quantity}
      amountType={item.amountType}
      sold={item.sold}
    />
  ));
  return (
    <div className={styles.gridContainer}>
      <Grid>{items}</Grid>;
    </div>
  );
}
