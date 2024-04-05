import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
// import ForbiddenPage from "../commons/pages/ForbiddenPage.tsx";
import React from "react";

const ConfigSelectorPage = React.lazy(() => import('../pages/ConfigSelectorPage.tsx'));
const ColorWarsPage = React.lazy(() => import('../pages/ColorWarsPage.tsx'));
// const AboutAbout = React.lazy(() => import('../features/profile/pages/AboutPage.tsx'));

const AppRouter = () => {
    const routes = (createBrowserRouter(
            createRoutesFromElements(
                <Route>
                    <Route path='colors-war' element={<React.Suspense fallback={<PreLoader/>}><ColorWarsPage/></React.Suspense>}/>

                    <Route path='*' element={<React.Suspense fallback={<PreLoader/>}><ConfigSelectorPage/></React.Suspense>}/>
                    {/*<Route path='403' element={<ForbiddenPage/>} />*/}
                </Route>
            )
        )
    )

    return <RouterProvider router={routes}/>;
}

const PreLoader = React.memo(() => {
    return <div className='flex justify-center items-center h-screen w-screen'>
        <span>Loading...</span>
    </div>
})

export default AppRouter;