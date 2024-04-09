type CellState = {
    player: number|null,
    state: number,
    rowIndex: number,
    cellIndex: number,
    isFinished: boolean
}

export default CellState;