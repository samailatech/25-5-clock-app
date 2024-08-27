import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Display from './Display';
import Timer from './Timer';

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  
  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      
      if (timeLeft === 0) {
        if (isSession) {
          setIsSession(false);
          setTimeLeft(breakLength * 60);
        } else {
          setIsSession(true);
          setTimeLeft(sessionLength * 60);
        }
        document.getElementById("beep").play();
      }

      return () => clearInterval(timerId);
    }
  }, [isRunning, timeLeft, isSession, sessionLength, breakLength]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsSession(true);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <Controls 
        sessionLength={sessionLength} 
        breakLength={breakLength} 
        setSessionLength={setSessionLength}
        setBreakLength={setBreakLength}
        isRunning={isRunning}
      />
      <Display 
        timeLeft={timeLeft} 
        isSession={isSession} 
      />
      <div className="timer-controls">
        <button id="start_stop" onClick={handleStartStop}>Start/Stop</button>
        <button id="reset" onClick={handleReset}>Reset</button>
      </div>
      <audio id="beep" src="your-audio-file.mp3"></audio>
    </div>
  );
}

export default App;
