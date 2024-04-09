import Board from "../components/Board.tsx";
import BoardSize from "../commons/enums/BoardSize.ts";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useWindowSize} from "../utility.ts";

const ColorWarsPage = () => {
    const [searchParams,] = useSearchParams();

    const [ currentPlayer, setCurrentPlayer ] = useState<number>(1);
    const [ isFinished, setIsFinished ] = useState(false);

    const [ maxPlayerCount, setMaxPlayerCount ] = useState<number|undefined>();
    const [ boarderSize, setBoarderSize ] = useState<BoardSize|undefined>();

    const [ wonPlayer, setWonPlayer ] = useState<number>(1);

    const navigate = useNavigate();
    const [width, height] = useWindowSize();

    useEffect(() => {
        if (boarderSize) {
            if (boarderSize > 5)
            {
                let size = (((height < width ? height : width) / boarderSize) - (boarderSize /2));
                if (size > (4 * 16)) {
                    size = 4 * 16;
                }

                document.documentElement
                    .style
                    .setProperty('--boardItemSize', size.toString() + 'px')
            }
        }
    }, [boarderSize, width, height]);

    useEffect(() => {
        try {
            if (searchParams.has('p')) {
                const pCount = parseInt(searchParams.get('p') ?? '2');

                if (pCount <= 4 || pCount >= 2) {
                    setMaxPlayerCount(pCount);
                }
                else {
                    setMaxPlayerCount(2)
                }
            }
        } catch (e) {
            console.log('MaxPlayer: ' + e)
            setMaxPlayerCount(2)
        }

        try {
            if (searchParams.has('s')) {
                const pCount = parseInt(searchParams.get('s') ?? '5');

                if ([5, 7, 10].includes(pCount)) {
                    setBoarderSize(pCount);
                }
                else {
                    setBoarderSize(5)
                }
            }
        } catch (e) {
            console.log('Size: ' + e)
            setBoarderSize(5)
        }

        const audio = new Audio('/src/assets/sounds/whistle.mp3');
        audio.play().then(() => {});
    }, []);

    useEffect(() => {
        document.body.className = 'bg-player' + currentPlayer;
    }, [currentPlayer]);

    const resetGame = () => {
        if (confirm('are you sure?')) {
            window.location.reload();
        }
    }

    const backTo = () => {
        if (confirm('are you sure?')) {
            navigate('/');
        }
    }

    if (!boarderSize || !maxPlayerCount) {
        return <div
            className='absolute glass bg-opacity-40 flex flex-col w-screen h-screen justify-center items-center'>
            <h2 className='text-black'>Loading...</h2>
        </div>
    }

    return (
        <div className={`game-page relative flex flex-col justify-center items-center`}>

            <div id='rotated-device' className="absolute inset-0 justify-center items-center bg-white z-20">
                <p>Please rotate your phone!</p>
            </div>
            {/*{*/}
            {/*    isFinished ? <div*/}
            {/*        className='absolute glass bg-opacity-40 flex flex-col w-screen h-screen justify-center items-center'>*/}
            {/*        <h2 className='text-black'>Game is finished :)</h2>*/}
            {/*        <button onClick={resetGame} className='btn btn-primary mt-2'>Reset</button>*/}
            {/*    </div> : undefined*/}
            {/*}*/}

            {/*<h3 className={`text-white mb-4 inline-block text-center ${!isFinished ? 'bg-neutral-700' : 'bg-success'} py-2 px-4 rounded-xl`}>*/}
            {/*    {*/}
            {/*        !isFinished*/}
            {/*            ? <span>Current Player: <span className=''>{currentPlayer}</span></span>*/}
            {/*            : <span>Player won!</span>*/}
            {/*    }*/}
            {/*</h3>*/}
            {
                isFinished &&
                <h3 className={`text-white mb-4 inline-block text-center ${!isFinished ? 'bg-neutral-700' : 'bg-success'} py-2 px-4 rounded-xl`}>
                    <span>Player { wonPlayer } won!</span>
                </h3>
            }

            <div className='flex w-screen absolute top-[20px] justify-center left-0 right-0'>
                <button onClick={backTo} className="btn-close btn btn-circle btn-outline border-white fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div
                className='bg-neutral-700 flex items-center absolute top-[30px] left-0 p-2 rounded-br-2xl rounded-tr-2xl'>
                <div className='mr-4 rounded-full w-[30px] h-[30px] bg-player1'></div>
                <p className='mr-2 text-white'>Player 1</p>
            </div>

            {
                maxPlayerCount >= 3 ?
                    <div
                        className='bg-neutral-700 flex items-center absolute top-[30px] right-0 p-2 rounded-bl-2xl rounded-tl-2xl'>
                        <p className='ml-2 text-white'>Player 3</p>
                        <div className='ml-4 rounded-full w-[30px] h-[30px] bg-player3'></div>
                    </div>
                : undefined
            }

            <div
                className='bg-neutral-700 flex items-center absolute bottom-[30px] right-0 p-2 rounded-bl-2xl rounded-tl-2xl'>
                <p className='ml-2 text-white'>Player 2</p>
                <div className='ml-4 rounded-full w-[30px] h-[30px] bg-player2'></div>
            </div>

            {
                maxPlayerCount == 4 ?
                    <div
                        className='bg-neutral-700 flex items-center absolute bottom-[30px] left-0 p-2 rounded-br-2xl rounded-tr-2xl'>
                        <div className='mr-4 rounded-full w-[30px] h-[30px] bg-player4'></div>
                        <p className='mr-2 text-white'>Player 4</p>
                    </div>
                : undefined
            }


            <Board
                maxPlayers={maxPlayerCount!}
                setWonPlayer={setWonPlayer}
                setIsFinished={setIsFinished}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                size={boarderSize!}
            />

            {
                isFinished ?
                    <div className="">
                        <button onClick={resetGame} className='btn btn-success text-white mt-2'>Reset</button>
                    </div>
                    : undefined
            }

        </div>
    )
}

export default ColorWarsPage;