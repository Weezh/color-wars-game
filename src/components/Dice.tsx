type DiceProps = {
    DiceNumber: number,
    player: number
}

const Dice = (props: DiceProps) => {
    return (
        <span className={`dice bg-player${props.player}`}>
            <span className="">
                <span className='flex'>
                    <span className='dice-circle'></span>
                    {
                        props.DiceNumber >= 2 ?
                            <span className='dice-circle'></span>
                            : undefined
                    }
                </span>
                {
                    props.DiceNumber >= 3 ?
                        <span className={`m-0 p-0 ${props.DiceNumber > 3 ? 'flex' : 'block'}`}>
                            <span className='dice-circle'></span>
                            {
                                props.DiceNumber >= 4 ?
                                    <span className='dice-circle'></span>
                                    : undefined
                            }
                        </span>
                    : undefined
                }
            </span>
        </span>
    )
}

export default Dice;