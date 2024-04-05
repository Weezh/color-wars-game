import BoardSize from "../commons/enums/BoardSize.ts";
import React, {Dispatch, ReactNode, useEffect, useState} from "react";
import CellState from "../commons/CellState.ts";
import BoardItem from "./BoardItem.tsx";
import Player from "../commons/Player.ts";
import {extractDifferences} from "../utility.ts";

type BoardProps = {
    size: BoardSize,
    currentPlayer: number,
    setCurrentPlayer: Dispatch<React.SetStateAction<number>>,
    setIsFinished: Dispatch<React.SetStateAction<boolean>>,
    maxPlayers: number
}

const Board = ({ size, currentPlayer, setCurrentPlayer, maxPlayers, setIsFinished }: BoardProps) => {
    const [ cells, setCells] = useState<Array<CellState[]>>([]);
    const [ rows, setRows ] = useState<React.ReactNode[]>();
    const [ isInitialized, setIsInitialized ] = useState(false);
    const [ players, setPlayers ] = useState<Player[]>([]);
    const [ waiting, setWaiting ] = useState(false);

    const initial = () => {
        console.log('--------------------------------')
        console.log('Initialing game...')
        console.log('--------------------------------')

        // Array to hold JSX elements for rows
        const initCells: Array<CellState[]> = [];

        // Outer loop for rows
        for (let i = 0; i < size; i++) {
            const colValues: CellState[] = [];

            // Inner loop for columns
            for (let j = 0; j < size; j++) {
                colValues.push({ player: null, state: 0, rowIndex: i, cellIndex: j });
            }

            initCells.push(colValues);
        }

        setCells(initCells);
    }

    const initialCells = () => {
        const initRows: React.ReactNode[] = [];

        cells.forEach((cells, index) => {
            const cols: ReactNode[] = [];

            cells.forEach((cell) => {
                const cellKey = `cell_${cell.rowIndex}_${cell.cellIndex}`;
                // Push JSX element for column into cols array
                // cols.push(<button data-state={0} onClick={(event) => onCellClick(event, i, j)} className="btn cell" key={cellKey}></button>);
                cols.push(<BoardItem isWaiting={waiting} key={cellKey} currentState={cell} onClick={onCellClick} />)
            });

            // Push JSX element for row into rows array
            initRows.push(<div className="row" key={`row_${index}`}>{cols}</div>);
        })

        setRows(initRows);
        setIsInitialized(true);
    }

    useEffect(() => {
        if (!isInitialized) {
            initial();
        }
    }, [isInitialized]);

    useEffect(() => {
        initialCells();
        checkPlayerOut();
    }, [cells]);

    useEffect(() => {
        if (players.length == maxPlayers && players.filter(x => !x.isOut).length == 1) {
            setIsFinished(true);
        }
    }, [players]);

    const onCellClick = (state: CellState) => {
        if (cells.length === 0 || !cells[state.rowIndex] || !cells[state.rowIndex][state.cellIndex]) {
            return alert('something happen');
        }

        if (state.player == null || state.player == currentPlayer) {
            if (state.player == null && players.find(x => x.playerNumber == currentPlayer)) {
                return;
            }

            if (state.player == null && !players.find(x => x.playerNumber == currentPlayer)) {
                setPlayers(prev => ([...prev, {
                    playerNumber: currentPlayer,
                    initialRowIndex: state.rowIndex,
                    initialCellIndex: state.cellIndex,
                    isOut: false
                }]))
            }

            const newCells = [...cells];
            const newCellValue: CellState = {
                ...state,
                player: currentPlayer,
                state: state.state+1
            }

            newCells[state.rowIndex][state.cellIndex] = newCellValue

            setCells(newCells);

            if (newCellValue.state == 4) {
                setWaiting(true);

                expendCells(newCellValue, newCells);

                setWaiting(false);
            }


            prepareNextPlayer();
        }
    }

    const prepareNextPlayer = () => {
        let nextPlayer = currentPlayer+1 > maxPlayers ? 1 : currentPlayer+1;

        for (let i = 0; i < Infinity; i++) {
            // checking player still in game or lose all of their cells
            const player = players.find(x => x.playerNumber == nextPlayer);

            if (player && player.isOut) {
                nextPlayer = nextPlayer+1 > maxPlayers ? 1 : nextPlayer+1;
                continue;
            }

            setCurrentPlayer(nextPlayer);
            break;
        }

        if (players.length == maxPlayers && players.filter(x => !x.isOut).length == 1) {
            setIsFinished(true);
        }
    }

    const checkPlayerOut = () => {
        if (players.length == maxPlayers) {
            // generate array of number from max players
            // example: 3 players result is [1,2,3]
            const playersNumbers = Array.from({ length: maxPlayers }, (_, index) => index + 1);
            const playersIn: number[] = [];

            cells.forEach((cellsValues) => {
                cellsValues.forEach((cell) => {
                    if (cell.player != null && !playersIn.includes(cell.player)) {
                        playersIn.push(cell.player);
                    }
                })
            })

            if (playersIn.length == 0) {
                return
            }

            const diff = extractDifferences(playersNumbers, playersIn);
            if (diff.length) {
                diff.forEach((playerNumber) => {
                    const newPlayers = players.map((player) => {
                        if (playerNumber == player.playerNumber) {
                            player.isOut = true;
                        }
                        return player;
                    })

                    setPlayers(newPlayers);
                })
            }
        }
    }

    const expendCells = (currentCell: CellState, cells: Array<CellState[]>) => {
        const newCells = [...cells];

        newCells[currentCell.rowIndex][currentCell.cellIndex] = {
            ...currentCell,
            player: null,
            state: 0
        }

        prepareCheckCell(currentCell.rowIndex, currentCell.cellIndex+1, newCells);
        prepareCheckCell(currentCell.rowIndex, currentCell.cellIndex-1, newCells);
        prepareCheckCell(currentCell.rowIndex-1, currentCell.cellIndex, newCells);
        prepareCheckCell(currentCell.rowIndex+1, currentCell.cellIndex, newCells);

        setCells(newCells);
    }

    const prepareCheckCell = (rowIndex: number, cellIndex: number, cells: Array<CellState[]>) => {
        if (cells[rowIndex] && cells[rowIndex][cellIndex]) {
            const item = cells[rowIndex][cellIndex];

            const newValue = {
                ...item,
                player: currentPlayer,
                state: (item.state+1 > 4 ? 4 : item.state+1)
            }

            cells[rowIndex][cellIndex] = newValue;

            if (newValue.state == 4) {
                expendCells(newValue, cells);
            }
        }
    }

    if (!isInitialized) {
        return <div className='text-white'>Loading...</div>
    }

    return (
        <div className='board'>
            {rows}
        </div>
    )
}

export default Board;