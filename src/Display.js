import React from 'react';

function Display({ timeLeft, isSession }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div id="display">
      <h2 id="timer-label">{isSession ? "Session" : "Break"}</h2>
      <span id="time-left">{formatTime(timeLeft)}</span>
    </div>
  );
}

export default Display;
