import CellState from "../commons/CellState.ts";
import Dice from "./Dice.tsx";

type BoardItemProps = {
    className?: string|undefined,
    currentState: CellState,
    onClick: (state: CellState) => void,
    isWaiting: boolean
}

const BoardItem = (props: BoardItemProps) => {
    const onClick = () => {
        if (!props.isWaiting) {
            props.onClick(props.currentState)
        }
    }

    return (
        <button onClick={onClick} className={`btn cell ${props.className ?? ''}`}>
            {
                props.currentState.player != null && props.currentState.state > 0 ?
                    <Dice player={props.currentState.player!} DiceNumber={props.currentState.state} />
                : undefined
            }
        </button>
    )
}

export default BoardItem;