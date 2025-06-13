import { useState, useEffect } from 'react'
import InputBar from './components/InputBar'
import ProgressBar from './components/ProgressBar'
import Stats from './components/Stats'
import QuoteDisplay from './components/QuoteDisplay'
import MultiplayerBoard from './components/MultiplayerBoard'
import './App.css'

function App() {

  
  const [input, setInput] = useState("")
  const [isAccurate, setIsAccurate] = useState(true);
  const [text, setText] = useState("")

  const handleText = (txt) => {
    setText(txt);
  }

  const handleInput = (val) =>{
    const newVal = val
    setInput(newVal);
  }

  useEffect( () => {
    if (!text.startsWith(input)){
      setIsAccurate(false)
    }
    else{
      setIsAccurate(true)
    }
  },[input, text])

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center gap-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-teal-400">WOFRacer</h1>

        {/* Quote display */}
        <QuoteDisplay sendWordsToParent = {handleText} isAcc = {isAccurate} typedLength = {input.length}/>

        <h1>{input}</h1>
        {/* Typing input */}
        <InputBar sendDataToParent={handleInput}/>

        {/* Progress bar */}
        <ProgressBar text = {text} input = {input}/>

        {/* Stats & buttons */}
        <Stats input = {input} isAccurate = {isAccurate}/>

        {/* Multiplayer board (optional) */}
        <MultiplayerBoard/>
      </div>
    </>
  )
}

export default App
