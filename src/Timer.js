// Timer.js

import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [activity, setActivity] = useState('Running');
  const [laps, setLaps] = useState([]);
  const [showWaterReminder, setShowWaterReminder] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);

        // Show water reminder after 10 minutes
        if (time === 600) {
          setShowWaterReminder(true);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    setIsActive((prev) => !prev);

    if (!isActive) {
      // Start a new activity
      setTime(0); // Reset time to 0 seconds
      setShowWaterReminder(false);
      setLaps([]);
    } else {
      // Stop the timer and record a lap
      setLaps((prevLaps) => [...prevLaps, { activity, time }]);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setShowWaterReminder(false);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, { activity, time }]);
  };

  const handleActivityChange = (newActivity) => {
    setActivity(newActivity);
  };

  return (
    <div className="timer-container dark-theme">
      <div className={`timer ${isActive ? 'active' : ''}`}>
        <h2>{activity}</h2>
        <div className="time">{time}s</div>
        {showWaterReminder && (
          <div className="water-reminder">Stay Hydrated! Time to drink water 🚰</div>
        )}
        <div className="buttons">
          <button
            onClick={handleStartStop}
            className={`start-stop ${isActive ? 'stop' : 'start'}`}
          >
            {isActive ? 'Stop' : 'Start'}
          </button>
          <button onClick={handleReset} className="reset">
            Reset
          </button>
          <button onClick={handleLap} disabled={!isActive} className="lap">
            Lap
          </button>
        </div>
      </div>

      <div className="options">
        <button
          onClick={() => handleActivityChange('Running')}
          className={`option ${activity === 'Running' ? 'selected' : ''}`}
        >
          Running
        </button>
        <button
          onClick={() => handleActivityChange('Cycling')}
          className={`option ${activity === 'Cycling' ? 'selected' : ''}`}
        >
          Cycling
        </button>
        <button
          onClick={() => handleActivityChange('Jumping')}
          className={`option ${activity === 'Jumping' ? 'selected' : ''}`}
        >
          Jumping
        </button>
        <button
          onClick={() => handleActivityChange('Yoga')}
          className={`option ${activity === 'Yoga' ? 'selected' : ''}`}
        >
          Yoga
        </button>
        <button
          onClick={() => handleActivityChange('Weightlifting')}
          className={`option ${activity === 'Weightlifting' ? 'selected' : ''}`}
        >
          Weightlifting
        </button>
        <button
          onClick={() => handleActivityChange('Swimming')}
          className={`option ${activity === 'Swimming' ? 'selected' : ''}`}
        >
          Swimming
        </button>
        {/* Add more activity options as needed */}
      </div>

      <div className="laps">
        <h3>Laps</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              {lap.activity} - {lap.time}s
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timer;
