import {HashRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";

const ConfigSelectorPage = React.lazy(() => import('../pages/ConfigSelectorPage.tsx'));
const ColorWarsPage = React.lazy(() => import('../pages/ColorWarsPage.tsx'));
// const AboutAbout = React.lazy(() => import('../features/profile/pages/AboutPage.tsx'));

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='colors-war' element={<React.Suspense fallback={<PreLoader/>}><ColorWarsPage/></React.Suspense>}/>
                <Route path='*' element={<React.Suspense fallback={<PreLoader/>}><ConfigSelectorPage/></React.Suspense>}/>
            </Routes>
        </Router>
    )
}

const PreLoader = React.memo(() => {
    return <div className='flex justify-center items-center h-screen w-screen'>
        <span>Loading...</span>
    </div>
})

export default AppRouter;