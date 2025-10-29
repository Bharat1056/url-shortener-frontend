import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend);

const Graph = ({ graphData }) => {
  const labels = graphData?.map((item) => item.clickDate) || Array(7).fill("");
  const userPerDay = graphData?.map((item) => item.count) || Array(7).fill(0);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: userPerDay,
        backgroundColor: "#4f46e5", // solid indigo tone
        borderRadius: 4,
        barThickness: 18,
        categoryPercentage: 0.7,
        barPercentage: 0.8,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#334155",
          font: { size: 12, weight: "500" },
          boxWidth: 12,
        },
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#f1f5f9",
        cornerRadius: 6,
        titleFont: { size: 13 },
        bodyFont: { size: 12 },
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(148,163,184,0.1)" },
        ticks: {
          color: "#475569",
          font: { size: 11 },
          precision: 0,
        },
        title: {
          display: true,
          text: "Clicks",
          color: "#334155",
          font: { size: 13, weight: "bold" },
        },
      },
      x: {
        grid: { color: "rgba(148,163,184,0.05)" },
        ticks: {
          color: "#475569",
          font: { size: 11 },
        },
        title: {
          display: true,
          text: "Date",
          color: "#334155",
          font: { size: 13, weight: "bold" },
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
