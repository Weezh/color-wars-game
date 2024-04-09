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

    return <div className='relative flex flex-col w-screen h-screen justify-center items-center bg-player1'>
        <form className='text-center bg-neutral-100 p-4 rounded-xl' onSubmit={(e) => goToGame(e)}>

            <p className='font-bold my-1'>Player Count</p>

            <div role="tablist" className="tabs bg-neutral-100 tabs-boxed">
                <a onClick={() => setMaxPlayerCount(2)} role="tab"
                   className={`tab mx-1 ${maxPlayerCount == 2 ? 'tab-active !text-white' : 'border'}`}>Two Player</a>
                <a onClick={() => setMaxPlayerCount(3)} role="tab"
                   className={`tab mx-1 ${maxPlayerCount == 3 ? 'tab-active !text-white' : 'border'}`}>Three Player</a>
                <a onClick={() => setMaxPlayerCount(4)} role="tab"
                   className={`tab mx-1 ${maxPlayerCount == 4 ? 'tab-active !text-white' : 'border'}`}>Four Player</a>
            </div>

            <p className='font-bold mt-4 mb-1'>Board Size</p>

            <div role="tablist" className="tabs bg-neutral-100 tabs-boxed">
                <a onClick={() => setSize(5)} role="tab"
                   className={`tab mx-1 ${size == 5 ? 'tab-active !text-white' : 'border'}`}>5 by 5</a>
                <a onClick={() => setSize(7)} role="tab"
                   className={`tab mx-1 ${size == 7 ? 'tab-active !text-white' : 'border'}`}>7 by 7</a>
                <a onClick={() => setSize(10)} role="tab"
                   className={`tab mx-1 ${size == 10 ? 'tab-active !text-white' : 'border'}`}>10 by 10</a>
            </div>

            <hr className='w-full mt-4'/>

            <button className='mt-4 btn w-full btn-primary text-white'>Start</button>
        </form>
    </div>
}

export default ConfigSelectorPage;