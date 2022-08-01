import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Drugstores from 'pages/Drugstores'
import Medicines from 'pages/Medicines'
import NotFound from 'pages/NotFound'

export default function  AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Drugstores /> } />
                <Route path="drugstores/:id" element={ <Medicines /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}