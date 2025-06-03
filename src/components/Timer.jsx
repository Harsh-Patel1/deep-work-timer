import { useState, useEffect } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(1500);
    const mins = Math.floor(timeLeft/60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    const formatTime = mins + ":" + secs;

    useEffect (() => {
        if (timeLeft == 0) return;

        const interval = setInterval(()=> {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft])

    return (
        <div>
            <p>
                {formatTime}
            </p>
        </div>
    )
}
export default Timer;
