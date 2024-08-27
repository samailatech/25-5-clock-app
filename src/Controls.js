import React from 'react';

function Controls({ sessionLength, breakLength, setSessionLength, setBreakLength, isRunning }) {
  const incrementSession = () => {
    if (sessionLength < 60 && !isRunning) {
      setSessionLength(sessionLength + 1);
    }
  };

  const decrementSession = () => {
    if (sessionLength > 1 && !isRunning) {
      setSessionLength(sessionLength - 1);
    }
  };

  const incrementBreak = () => {
    if (breakLength < 60 && !isRunning) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementBreak = () => {
    if (breakLength > 1 && !isRunning) {
      setBreakLength(breakLength - 1);
    }
  };

  return (
    <div className="controls">
      <div id="break">
        <h2 id="break-label">Break Length</h2>
        <button id="break-decrement" onClick={decrementBreak}>-</button>
        <span id="break-length">{breakLength}</span>
        <button id="break-increment" onClick={incrementBreak}>+</button>
      </div>
      <div id="session">
        <h2 id="session-label">Session Length</h2>
        <button id="session-decrement" onClick={decrementSession}>-</button>
        <span id="session-length">{sessionLength}</span>
        <button id="session-increment" onClick={incrementSession}>+</button>
      </div>
    </div>
  );
}

export default Controls;
