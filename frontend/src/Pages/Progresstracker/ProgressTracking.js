import React, { useState, useEffect } from "react";
import "./Progresstracker.css";

const Progresstracker = () => {
  const [progresses, setProgresses] = useState([]);
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simulate fetching progress data
    const mockProgresses = [
      { id: 1, exercise: "Push Up", sets: 3, repetitions: 15 },
      { id: 2, exercise: "Squat", sets: 4, repetitions: 20 },
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
    setExercise("");
    setSets("");
    setRepetitions("");
    setMessage("Progress added successfully!");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
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
            <p>
              <strong>Sets:</strong> {progress.sets}
            </p>
            <p>
              <strong>Repetitions:</strong> {progress.repetitions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progresstracker;
