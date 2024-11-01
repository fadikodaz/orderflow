"use client";

import React from 'react';
import { Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const CustomLineChart = () => {
  const data = {
    labels: Array.from({ length: 100 }, (_, i) => `Time ${i + 1}`),
    datasets: [
      {
        label: 'Line 1',
        data: Array.from({ length: 100 }, () => Math.random() * 100 - 100),
        borderColor: 'cyan',
        borderWidth: 1.5,
        backgroundColor: 'transparent',
        fill: false,
        pointRadius: 0,
      },
      {
        label: 'Line 2',
        data: Array.from({ length: 100 }, () => Math.random() * 100 - 100),
        borderColor: 'white',
        borderWidth: 1.5,
        backgroundColor: 'transparent',
        fill: false,
        pointRadius: 0,
      },
      {
        label: 'Line 3',
        data: Array.from({ length: 100 }, () => Math.random() * 1000 - 500),
        borderColor: 'magenta',
        borderWidth: 1.5,
        backgroundColor: 'transparent',
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <Box
      className="w-[100%] "
    >
      <Line data={data} options={options} />
      <Line data={data} options={options} />
      <Line data={data} options={options} />
    </Box>
  );
};

export default CustomLineChart;
