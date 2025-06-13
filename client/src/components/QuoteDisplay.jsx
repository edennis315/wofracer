import { useEffect, useState } from "react";
import axios from 'axios';

function QuoteDisplay({sendWordsToParent, isAcc, typedLength}) {

    const [bg, setBg] = useState("bg-gray-800")

    const [text, setText] = useState("");

    useEffect(() => {
        const fetchQuote = async () => {
            try {
              const res = await axios.get("/api/quotes/random"); // ← fixed API endpoint
              console.log(res.data.quote);
            setText(res.data.quote);
            sendWordsToParent(res.data.quote);
            } catch (err) {
              console.error("Failed to fetch quote:", err);
              // fallback quote
              const fallback = "The quick brown fox jumps over the lazy dog.";
              setText(fallback);
              sendWordsToParent(fallback);
            }
          };
      
          fetchQuote();
    }, [])
    
    useEffect(() => {
        if(!isAcc){
            setBg("bg-red-800")
        }
        else{
            setBg("bg-gray-800")
        }
    }, [isAcc])
    
    return ( 
        <>
            <div className={`w-full max-w-3xl ${bg} p-6 rounded-xl shadow-lg text-xl leading-relaxed tracking-wide border-l-4 border-teal-500`}>
                <span className="text-green-400">{text.substring(0,typedLength)}<span className="inline-block w-0.25 h-6 bg-white animate-pulse align-middle ml-0.5" /></span>{text.substring(typedLength)}
            </div>
        </>
     );
}

export default QuoteDisplay;