import {useState, useEffect} from 'react'

function Stats({input, isAccurate}) {
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0); // in milliseconds
    const [wordCount, setWordCount] = useState(0);

    function countWords(str) {
        return str.trim().split(/\s+/).filter(Boolean).length;
    }

    useEffect(() => {
        if (input.length > 0 && !startTime) {
        setStartTime(Date.now());
        }
        if(isAccurate){
            setWordCount(countWords(input));
        }
    }, [input, startTime]);

    useEffect(() => {
        if (!startTime) return;

        const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
        }, 100); // update every 100ms

        return () => clearInterval(interval);
    }, [startTime]);
    const elapsedMinutes = elapsedTime / 1000 / 60;
    const wpm = elapsedMinutes > 0 ? (wordCount / elapsedMinutes).toFixed(0) : 0;
    return ( 
        <>
            <div className="w-full max-w-3xl flex justify-between items-center mt-4">
            <div className="text-sm space-y-1">
                <p>
                <span className="text-teal-400 font-semibold">Speed:</span> {wpm} WPM
                </p>
                <p>
                <span className="text-teal-400 font-semibold">Accuracy:</span> 0%
                </p>
            </div>

            <div className="space-x-4">
                <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow transition">
                Start
                </button>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition">
                Reset
                </button>
            </div>
            </div>
        
        </>
     );
}

export default Stats;