function InputBar({sendDataToParent}) {


    const handleKeyDown = (e) =>{
        const newVal = e.target.value
        sendDataToParent(newVal)
    }
    return (
        <>
            <input
            type="text"
            placeholder="Start typing..."
            className="w-full max-w-3xl px-4 py-3 text-lg rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            onChange = {(e) => {handleKeyDown(e)}}/>
        </>
    );
}

export default InputBar;