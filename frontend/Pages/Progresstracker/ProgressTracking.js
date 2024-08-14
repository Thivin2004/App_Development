// import React, { useRef, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
// import { styled } from '@mui/system';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const ProgressContainer = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: '50px',
//   padding: '20px',
//   backgroundColor: '#f9f9f9',
//   borderRadius: '8px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// });

// const ChartContainer = styled('div')({
//   position: 'relative',
//   width: '100%',
//   height: '400px',
//   maxWidth: '800px',
//   backgroundColor: '#ffffff',
//   borderRadius: '8px',
//   padding: '20px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// });

// const ProgressTracking = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Destroy the old chart instance if it exists
//     if (chartRef.current && chartRef.current.chartInstance) {
//       chartRef.current.chartInstance.destroy();
//     }
//   }, []);

//   // Chart data
//   const data = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//     datasets: [
//       {
//         label: 'Weight Progress',
//         data: [70, 68, 66, 64], // Example data
//         borderColor: '#00bcd4',
//         backgroundColor: 'rgba(0, 188, 212, 0.2)',
//         borderWidth: 2,
//         pointStyle: 'circle',
//         pointRadius: 5,
//         pointHoverRadius: 7,
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       title: {
//         display: true,
//         text: 'Your Weight Progress Over 4 Weeks',
//         padding: {
//           top: 20,
//           bottom: 10,
//         },
//         color: '#333',
//         font: {
//           size: 18,
//           weight: 'bold',
//         },
//       },
//       legend: {
//         position: 'top',
//         labels: {
//           color: '#333',
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const label = context.dataset.label || '';
//             const value = context.raw;
//             return `${label}: ${value} kg`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Weeks',
//           color: '#333',
//         },
//         grid: {
//           color: '#e0e0e0',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Weight (kg)',
//           color: '#333',
//         },
//         beginAtZero: true,
//         grid: {
//           color: '#e0e0e0',
//         },
//       },
//     },
//   };

//   return (
//     <ProgressContainer>
//       <Container maxWidth="md">
//         <Typography variant="h4" gutterBottom>
//           Progress Tracking
//         </Typography>
//         <ChartContainer>
//           <Line ref={chartRef} data={data} options={options} />
//         </ChartContainer>
//       </Container>
//     </ProgressContainer>
//   );
// };

// export default ProgressTracking;

import React, { useState, useEffect } from 'react';
import './Progresstracker.css';

const Progresstracker = () => {
  const [progresses, setProgresses] = useState([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulate fetching progress data
    const mockProgresses = [
      { id: 1, exercise: 'Push Up', sets: 3, repetitions: 15 },
      { id: 2, exercise: 'Squat', sets: 4, repetitions: 20 },
    ];
    setProgresses(mockProgresses);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding progress
    const newProgress = {
      id: progresses.length + 1,
      exercise,
      sets: parseInt(sets),
      repetitions: parseInt(repetitions),
    };
    setProgresses([...progresses, newProgress]);
    setExercise('');
    setSets('');
    setRepetitions('');
    setMessage('Progress added successfully!');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="progress-tracker-container">
      <h1>Progress Tracker</h1>
      <form className="progress-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Repetitions"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
          required
        />
        <button type="submit">Add Progress</button>
      </form>
      {message && <div className="success-message">{message}</div>}
      <div className="progress-list">
        {progresses.map((progress) => (
          <div key={progress.id} className="progress-item">
            <h2>{progress.exercise}</h2>
            <p><strong>Sets:</strong> {progress.sets}</p>
            <p><strong>Repetitions:</strong> {progress.repetitions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progresstracker;
