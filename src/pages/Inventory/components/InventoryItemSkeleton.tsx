/** @format */

import ContentLoader from "react-content-loader";
import styles from "../styles/Item.module.css";

export default function InventoryItemSkeleton() {
  return (
    <div className={styles.itemSkeleton}>
      <ContentLoader viewBox="0 0 300 90" backgroundColor="var(--layer)">
        {/* Only SVG shapes */}
        <rect x="0" y="0" rx="5" ry="5" width="90" height="90" />
        <rect x="100" y="5" rx="4" ry="4" width="120" height="15" />
        <rect x="100" y="35" rx="3" ry="3" width="120" height="15" />
        <rect x="100" y="65" rx="3" ry="3" width="120" height="15" />
      </ContentLoader>
    </div>
  );
}
