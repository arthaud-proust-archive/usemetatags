import { useState } from 'react'
import './App.css'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './views/Home';
import InApp from './views/InApp';
import About from './views/About';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/app" element={<InApp/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}
