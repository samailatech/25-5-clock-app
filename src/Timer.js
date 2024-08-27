import React, { useEffect } from 'react';

function Timer({ isRunning, timeLeft, setTimeLeft, isSession, setIsSession, sessionLength, breakLength }) {
  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      if (timeLeft === 0) {
        setIsSession(!isSession);
        setTimeLeft((isSession ? breakLength : sessionLength) * 60);
        document.getElementById("beep").play();
      }

      return () => clearInterval(timerId);
    }
  }, [isRunning, timeLeft, isSession, sessionLength, breakLength, setIsSession, setTimeLeft]);

  return null; // No UI needed as it's handled by other components
}

export default Timer;
