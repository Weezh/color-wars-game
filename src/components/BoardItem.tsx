import CellState from "../commons/CellState.ts";
import Dice from "./Dice.tsx";
// import {useState} from "react";

type BoardItemProps = {
    currentPlayer: number,
    className?: string|undefined,
    currentState: CellState,
    onClick: (state: CellState) => void,
    isWaiting: boolean
}

const BoardItem = (props: BoardItemProps) => {
    // const [ isFinished, setIsFinished ] = useState<boolean>(props.currentState.state >= 4);

    const onClick = () => {
        if (!props.isWaiting) {
            // if (props.currentState.state+1 >= 4) {
            //     setIsFinished(true);
            // }

            props.onClick(props.currentState)
        }
    }

    return (
        <button onClick={onClick} className={`btn ${ props.currentState.player == props.currentPlayer && 'current-player' + props.currentPlayer } cell ${props.className ?? ''}`}>
            {/*{*/}
            {/*    isFinished &&*/}
            {/*        <>*/}
            {/*            <div className={`dice dice-ghost dice-ghost1 bg-player${props.currentState.player}`}></div>*/}
            {/*            <div className={`dice dice-ghost dice-ghost2 bg-player${props.currentState.player}`}></div>*/}
            {/*            <div className={`dice dice-ghost dice-ghost3 bg-player${props.currentState.player}`}></div>*/}
            {/*            <div className={`dice dice-ghost dice-ghost4 bg-player${props.currentState.player}`}></div>*/}
            {/*        </>*/}
            {/*}*/}
            {
                props.currentState.player != null && props.currentState.state > 0 ?
                    <Dice player={props.currentState.player!} DiceNumber={props.currentState.state} />
                : undefined
            }
        </button>
    )
}

export default BoardItem;