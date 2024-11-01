'use client'; // This makes the component a client component

import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomHorizontalChart = () => {
  const chartRef = useRef(null); // Example useRef

  const data = {
    labels: ['4400', '4375', '4350', '4325', '4300', '4275', '4250', '4225', '4200', '4175', '4150', '4125', '4100'],
    datasets: [
      {
        label: 'Positive Volume', // Keep the label in the dataset for legend functionality
        data: [500, 1200, 800, 1000, 1300, 1100, 700, 950, 1250, 1100, 1000, 900, 800],
        backgroundColor: '#f8112b',
        borderWidth: 1,
      },
      {
        label: 'Negative Volume', // Keep the label in the dataset for legend functionality
        data: [-400, -1000, -600, -850, -1200, -900, -650, -700, -1150, -1000, -800, -750, -600],
        backgroundColor: '#fcc201',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false, // Important for height adjustment
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}`,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Light gray grid lines for contrast on black
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Light gray grid lines for contrast on black
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Remove legend display, which includes the labels
      },
    },
    barPercentage: 0.3,
    categoryPercentage: 0.7,
  };

  return (
    <Box style={{ height: 'calc(100vh - 66px)', width: '100%' }}> {/* Full height container */}
      <Bar ref={chartRef} data={data} options={options} style={{ height: '100%', width: '100%' }} />
    </Box>
  );
};

export default CustomHorizontalChart;
