/** @format */
import { format } from "date-fns";
import Button from "../../../components/Button/Button";
import styles from "../styles/Item.module.css";

type InventoryItemProps = {
  image?: string;
  origin: string;
  amountType: string;
  quantity: number;
  sold: number;
  date: Date;
};

export default function InventoryItem({
  image,
  origin,
  quantity,
  sold,
  date,
}: InventoryItemProps) {
  const displayDate = format(date, "dd/mm/yyyy");
  return (
    <div className={styles.item}>
      <span className={styles.imageHOLDER}>
        <img src={image} alt="item image" />
      </span>
      <div className={styles.infoSection}>
        <span>Origin: {origin}</span>
        <span>Quantity: {quantity}</span>
        <span>Sold: {sold}</span>
        <span>Date: {displayDate}</span>
      </div>
      <Button styleType="teritarry" className={styles.button}>
        Edit
      </Button>
    </div>
  );
}
