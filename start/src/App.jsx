import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'

export default function App() {
    const [page, setPage] = useState('home')

    return (
        <>
            <Nav setPage={setPage} />
            <br />
            {page === 'home' && <Home setPage={setPage} />}
        </>
    )
}