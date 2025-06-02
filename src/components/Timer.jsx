import { useState } from 'react';

function Timer() {
    const [timeleft, setTimeLeft] = useState(1500);

    return (
        <div>
            <p>
                {timeleft}
            </p>
        </div>
    )
}
export default Timer;
