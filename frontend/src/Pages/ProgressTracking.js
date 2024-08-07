import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ProgressContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const ChartContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '400px',
  maxWidth: '800px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const ProgressTracking = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Destroy the old chart instance if it exists
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }
  }, []);

  // Chart data
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weight Progress',
        data: [70, 68, 66, 64], // Example data
        borderColor: '#00bcd4',
        backgroundColor: 'rgba(0, 188, 212, 0.2)',
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Your Weight Progress Over 4 Weeks',
        padding: {
          top: 20,
          bottom: 10,
        },
        color: '#333',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      legend: {
        position: 'top',
        labels: {
          color: '#333',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value} kg`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks',
          color: '#333',
        },
        grid: {
          color: '#e0e0e0',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)',
          color: '#333',
        },
        beginAtZero: true,
        grid: {
          color: '#e0e0e0',
        },
      },
    },
  };

  return (
    <ProgressContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Progress Tracking
        </Typography>
        <ChartContainer>
          <Line ref={chartRef} data={data} options={options} />
        </ChartContainer>
      </Container>
    </ProgressContainer>
  );
};

export default ProgressTracking;
