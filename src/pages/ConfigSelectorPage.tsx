import {useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";

const ConfigSelectorPage = () => {
    const [ maxPlayerCount, setMaxPlayerCount ] = useState(2);
    const [ size, setSize ] = useState(5);
    const navigate = useNavigate();

    const goToGame = (e: FormEvent) => {
        e.preventDefault();
        navigate(`/colors-war?p=${maxPlayerCount}&s=${size}`)
    }

    const changePlayerCount = (val: number) => {
        setMaxPlayerCount(val)
    }

    return <div className='relative flex flex-col w-screen h-screen justify-center items-center bg-player1'>
        <form className='text-center bg-neutral-100 p-4 rounded-xl' onSubmit={(e) => goToGame(e)}>

            <p className='font-bold my-1'>Player Count</p>
            <div className="grid grid-cols-3 gap-2 border rounded-xl p-2">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={() => changePlayerCount(2)} type="radio" name="radio-10"
                               className="radio checked:bg-blue-500" checked={maxPlayerCount == 2}/>
                        <span className="ml-2 label-text">Two Player</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={() => changePlayerCount(3)} type="radio" name="radio-10"
                               className="radio checked:bg-blue-500" checked={maxPlayerCount == 3}/>
                        <span className="ml-2 label-text">Three Player</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={() => changePlayerCount(4)} type="radio" name="radio-10"
                               className="radio checked:bg-blue-500" checked={maxPlayerCount == 4}/>
                        <span className="ml-2 label-text">Four Player</span>
                    </label>
                </div>
            </div>

            <p className='font-bold mt-4 mb-1'>board Size</p>
            <div className="grid grid-cols-3 gap-2 border rounded-xl p-2">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={() => setSize(5)} type="radio" name="size"
                               className="radio checked:bg-blue-500" checked={size == 5}/>
                        <span className="ml-2 label-text">5 by 5</span>
                    </label>
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={() => setSize(7)} type="radio" name="size"
                               className="radio checked:bg-blue-500" checked={size == 7}/>
                        <span className="ml-2 label-text">7 by 7</span>
                    </label>
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={() => setSize(10)} type="radio" name="size"
                               className="radio checked:bg-blue-500" checked={size == 10}/>
                        <span className="ml-2 label-text">10 by 10</span>
                    </label>
                </div>

                {/*<div className="form-control">*/}
                {/*    <label className="label cursor-pointer">*/}
                {/*        <input onClick={() => setSize(20)} type="radio" name="size"*/}
                {/*               className="radio checked:bg-blue-500"/>*/}
                {/*        <span className="label-text">20 by 20</span>*/}
                {/*    </label>*/}
                {/*</div>*/}
            </div>

            <button className='mt-4 btn btn-primary text-white'>Start</button>
        </form>
    </div>
}

export default ConfigSelectorPage;