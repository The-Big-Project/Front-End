/** @format */
import style from "./style.module.css";
export type DashboardItemSideProps = {
  amount: number;
  remaingAmount: number;
  label: string;
};

export default function DashboardItemSide({
  amount,
  remaingAmount,
  label,
}: DashboardItemSideProps) {
  return (
    <div className={style.itemSide}>
      <h2>{label}</h2>
      <p>Total Amount: {amount}</p>
      <p>Remaining Amount: {remaingAmount}</p>
    </div>
  );
}
