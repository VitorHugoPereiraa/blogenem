import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom'

import Infos from './pages/Infos'
import MoreInfos from './pages/MoreInfos'

export default function () {
    return (
        <Routes>
            <Route path='/' element={<Infos />}/>
            <Route path='/more-info' element={<MoreInfos />}/>
        </Routes>
    )
}