/** @format */

import { useSearchParams } from "react-router-dom";
import useInventoryItems from "../../../hooks/useInventoryItems";
import InventoryGrid from "./InventoryGrid";
import styles from "../styles/main.module.css";

export default function InventoryLowerPart() {
  const { data, isPending, refetch, error } = useInventoryItems();
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get("pageNumber") || 0;
  return (
    <div className={styles.lowerPart}>
      <h2>
        page {pageNumber} of {data?.documentCount}
      </h2>
      <InventoryGrid data={data?.data} />
    </div>
  );
}
