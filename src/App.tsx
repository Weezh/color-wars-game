import Board from "./components/Board.tsx";
import BoardSize from "./commons/enums/BoardSize.ts";
import {useState} from "react";

function App() {
    const [ currentPlayer, setCurrentPlayer ] = useState<number>(1);
    const [ isFinished, setIsFinished ] = useState(false);

    const resetGame = () => {
        location.reload();
    }

    return (
        <div className={`relative flex flex-col w-screen h-screen justify-center items-center bg-player${currentPlayer}`}>

            {
                isFinished ? <div className='absolute glass bg-opacity-40 flex flex-col w-screen h-screen justify-center items-center'>
                    <h2 className='text-black'>Game is finished :)</h2>
                    <button onClick={resetGame} className='btn btn-primary mt-2'>Reset</button>
                </div> : undefined
            }

            <h3 className='text-white mb-4 inline-block text-center bg-neutral-700 py-2 px-4 rounded-xl'>Current Player: <span className=''>{currentPlayer}</span></h3>
            <Board
                maxPlayers={2}
                setIsFinished={setIsFinished}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                size={BoardSize.FiveByFive}
            />
        </div>
    )
}

export default App
