/** @format */
import { HiAcademicCap } from "react-icons/hi2";
import DashboardItem from "./components/DashboardItem/DashboardItem";
import styles from "./style.module.css";
import DashboardItemSide from "./components/DashboardItem/DashboardItemSide";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useLanguages from "../../hooks/useLanguage";
import language from "@/assets/languages/dashboardSource";

const data = [
  {
    name: "Day 1",
    sell: 4000,
    revenue: 5600,
  },
  {
    name: "Day 1",
    sell: 4000,
    revenue: 5600,
  },
  {
    name: "Day 1",
    sell: 4000,
    revenue: 5600,
  },
  {
    name: "Day 1",
    sell: 4000,
    revenue: 5600,
  },
  {
    name: "Day 1",
    sell: 4000,
    revenue: 5600,
  },
  {
    name: "Day 1",
    sell: 4000,
    revenue: 5600,
  },
  {
    name: "Day 1",
    sell: 4000,
    revenue: 5600,
  },
];

export default function Dashboard() {
  const lang = useLanguages();
  return (
    <div className={styles.dashboardContainer}>
      <h1>Bilal, Welcome</h1>
      <div className={styles.dashboard}>
        <ResponsiveContainer
          width="100%"
          height={300}
          className={styles.barChart}
        >
          <h2>LAST WEEK</h2>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" name={language[lang].sell} fill="#8884d8" />
            <Bar
              dataKey="revenue"
              name={language[lang].revenue}
              fill="#82ca9d"
            />
          </BarChart>
        </ResponsiveContainer>
        <DashboardItem icon={<HiAcademicCap size={120} />} direction="vertical">
          <DashboardItemSide amount={5} remaingAmount={3} label="ITEMS" />
        </DashboardItem>
        <DashboardItem icon={<HiAcademicCap />}>
          <DashboardItemSide amount={5} remaingAmount={3} label="ITEMS" />
        </DashboardItem>
      </div>
    </div>
  );
}
