import {useEffect, useState} from 'react'

function MultiplayerBoard() {
    return ( 
        <>
            <div className="w-full max-w-3xl mt-8">
                <h2 className="text-xl mb-2 font-semibold text-teal-300">Players</h2>
                <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Player1</span>
                        <span>10 wpm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Player2</span>
                        <span>65 WPM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>You</span>
                        <span>0 WPM</span>
                    </div>
                </div>
            </div>
        </>
     );
}

export default MultiplayerBoard;