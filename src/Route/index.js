import {authRoutes, publicRoutes} from "./Routes";

import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    const [State, setState] = useState(true)
    return (
        <Routes>
            {State && authRoutes.map(route =>
                (<Route path={route.path} element={route.element}/>)
            )}
            {
                publicRoutes && publicRoutes.map(route => (
                    <Route path={route.path} element={route.element}/>
                ))
            }
        </Routes>
    );
};

export default AppRouter;