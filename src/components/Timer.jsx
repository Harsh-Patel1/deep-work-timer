import { useState, useEffect } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(1500);
    const [isRunning, setIsRunning] = useState(false); // Keeps track of if we are running the timer, T if running, F if paused
    const mins = Math.floor(timeLeft/60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    const formatTime = mins + ":" + secs;


    useEffect (() => {
        if (!isRunning || timeLeft == 0) return;

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
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick ={() => setIsRunning(false)}> Pause </button>
            <button onClick = {()=> {
                setIsRunning(false);
                setTimeLeft(1500);
            }}> Reset</button>
        </div>
    )
}
export default Timer;
