/** @format */

import { useSearchParams } from "react-router-dom";
import useInventoryItems from "../../../hooks/useInventoryItems";
import InventoryGrid from "./InventoryGrid";
import styles from "../styles/main.module.css";
import ErrorComponent from "../../../components/ErrorComponent/ErrorComponent";
import Button from "../../../components/Button/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function InventoryLowerPart() {
  const { data, isPending, refetch, isError, isPaused } = useInventoryItems();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get("pageNumber") || 0;
  const pageSize = searchParams.get("pageSize") || 12;
  const numberOfPages = data ? Math.floor(+data?.count / +pageSize) : 0;
  const isOnline = navigator.onLine;

  function paginate(direction: "next" | "previous"): void {
    console.log(direction);
    if (direction === "next" && +pageNumber < numberOfPages) {
      searchParams.set("pageNumber", (+pageNumber + 1).toString());
      setSearchParams(searchParams);
    }
    if (direction === "previous" && +pageNumber > 0) {
      searchParams.set("pageNumber", (+pageNumber - 1).toString());
      setSearchParams(searchParams);
    }
  }

  if (isPaused || isError)
    return (
      <div className={styles.lowerPart}>
        {!isOnline ? (
          <ErrorComponent errorType="network">No Connection</ErrorComponent>
        ) : (
          <ErrorComponent errorType="unknown">
            Unknown Error Occured
          </ErrorComponent>
        )}
        <Button styleType="secondary" onClick={refetch}>
          Retry
        </Button>
      </div>
    );

  if (isPending) return <p>LOADING</p>;

  if (data)
    return (
      <div className={styles.lowerPart}>
        <h2>
          page {+pageNumber + 1} of {numberOfPages}
        </h2>
        <div className={styles.mainContainer}>
          <Button
            icon={<FaArrowLeft size={12} />}
            iconPosition="start"
            styleType="primary"
            onClick={() => paginate("previous")}
            disabled={+pageNumber <= 0}
          >
            Previous
          </Button>
          <InventoryGrid data={data?.result} />
          <Button
            icon={<FaArrowRight size={12} />}
            iconPosition="end"
            styleType="primary"
            onClick={() => paginate("next")}
            disabled={+pageNumber >= numberOfPages}
          >
            Next
          </Button>
        </div>
      </div>
    );
}
