import { useState, useEffect } from 'react';

function Timer() {
    const [initialTime, setInitialTime] = useState(1500);
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false); // Keeps track of if we are running the timer, T if running, F if paused

    // used for user input of custom time
    const [inputMinutes, setInputMinutes] = useState();

    const mins = Math.floor(timeLeft/60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');

    const formatTime = mins + ":" + secs;






    useEffect (() => {
        if (!isRunning || timeLeft === 0) return;

        const interval = setInterval(()=> {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, timeLeft])

    return (
        <div>
            <p>
                {formatTime}
            </p>
            <input
            type="number"
            placeholder="Enter minutes"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(parseInt(e.target.value) || 0)}
            />
            <button onClick ={() => {
                const totalSeconds = inputMinutes * 60;
                setInitialTime(totalSeconds);
                setTimeLeft(totalSeconds);
            }}>Set Time</button>

            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick ={() => setIsRunning(false)}> Pause </button>
            <button onClick = {()=> {
                setIsRunning(false);
                setTimeLeft(initialTime);
            }}> Reset</button>
        </div>
    )
}
export default Timer;
