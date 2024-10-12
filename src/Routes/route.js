import React from "react";
import {  Routes, Route, Navigate, } from 'react-router-dom';
import { HomePage } from "./pageListAsync";


const ApplicationRoutes = () => {

    return(
        <Routes>
        <Route  >
            <Route path="/home" element={<HomePage />} />

            <Route path="*" element={<Navigate to="/home" replace />} />

        </Route>

        </Routes>
    )
}


export default ApplicationRoutes