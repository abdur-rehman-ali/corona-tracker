import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./Report.module.css";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Report = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchData();
  }, []);

  const LineGraph = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) =>
          new Date(reportDate).toLocaleDateString()
        ),
        datasets: [
          {
            label: "Confirmed",
            data: dailyData.map((data) => data.confirmed),
            fill: true,
            borderColor: "rgba(0,0,255,0.5)",
          },
          {
            label: "Deaths",
            data: dailyData.map((data) => data.deaths),
            fill: false,
            borderColor: "rgba(255,0,0,0.5)",
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{LineGraph}</div>;
};

export default Report;
