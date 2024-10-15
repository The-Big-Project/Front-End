/** @format */

import type { inventoryItemType } from "../../../api/inventoryApi";
import Grid from "../../../components/Grid/Grid";
import InventoryItem from "./InventoryItem";
import styles from "../styles/main.module.css";
import InventoryItemSkeleton from "./InventoryItemSkeleton";
type InventoryGridProps = {
  data: inventoryItemType[] | undefined;
  isPending: boolean;
};

export default function InventoryGrid({
  data,
  isPending,
}: Readonly<InventoryGridProps>) {
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

  const skeletons = Array.from(Array(12), () => <InventoryItemSkeleton />);

  return (
    <div className={styles.gridContainer}>
      <Grid>
        {data && items}
        {isPending && skeletons}
      </Grid>
    </div>
  );
}
