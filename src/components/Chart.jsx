import React, {useState, useEffect} from "react";
import {fetchData} from "../api/index.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart({data, isGlobal}) {
  let labels = [];
  let title = "";
  let confirmedData = [];
  let deathsData = [];
  let recoveredData = [];
  if (isGlobal) {
    title = `This is all cases in the Global`;
    labels = [] || data?.Countries.map((country) => country.Country);
    confirmedData = [] || data?.Countries.map((country) => country.TotalConfirmed);
    deathsData = [] || data?.Countries.map((country) => country.TotalDeaths);
    recoveredData = [] || data?.Countries.map((country) => country.TotalRecovred);
  } else {
    title = `This is all cases in the ${data[0]?.Country}`;
    labels = data?.map((day) => day.Date.slice(0, 10));
    confirmedData = data?.map((day) => day.Confirmed);
    deathsData = data?.map((day) => day.Deaths);
    recoveredData = data?.map((day) => day.Recovered);
  }
  const dataChart = {
    labels,
    datasets: [
      {
        label: "Confirmed",
        data: confirmedData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Deaths",
        data: deathsData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Recovered",
        data: recoveredData,
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  return (
    <Line className="m-4 p-4 bg-white rounded-3xl shadow-lg " options={options} data={dataChart} />
  );
}
