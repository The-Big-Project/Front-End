/** @format */
import { HiPlus } from "react-icons/hi2";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from "../styles/Subhead.module.scss";
import { HiFilter } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useSearchContext } from "../contexts/SearchContext";

export default function Subhead() {
  const { searchQuery, handleSearch } = useSearchContext();

  return (
    <div className={styles.subhead}>
      <Input
        inputType="text"
        icon={<BiSearch />}
        wrapperClassName={styles.searchInput}
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className={styles.buttonsContainer}>
        <Button styleType="primary">
          <HiPlus /> New Item
        </Button>
        <Button styleType="secondary">
          <HiFilter /> Filters
        </Button>
      </div>
    </div>
  );
}
