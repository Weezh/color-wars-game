import AppRouter from "./routes";
import {useEffect} from "react";
import {useWindowSize} from "./utility.ts";

function App() {
    const [width, height] = useWindowSize();

    useEffect(() => {
        document.documentElement
            .style
            .setProperty('--windows-height', height.toString() + 'px')

        document.documentElement
            .style
            .setProperty('--windows-width', width.toString() + 'px')
    }, [height, width])

    return <AppRouter/>
}

export default App
