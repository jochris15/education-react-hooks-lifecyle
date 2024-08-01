import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import ProductsForm from './components/ProductsForm'
import { useEffect } from 'react'

export default function App() {
    const url = 'https://h8-phase2-gc.vercel.app'
    const [page, setPage] = useState('home')
    let token = localStorage.access_token
    useEffect(() => {
        if (token) {
            setPage("home")
        } else {
            setPage("login")
        }
    }, [])

    return (
        <>
            <Nav setPage={setPage} />
            <br />
            {token && page === 'home' && <Home url={url} />}
            {!token && page === 'login' && <Login setPage={setPage} url={url} />}
            {token && page === 'form' && <ProductsForm setPage={setPage} url={url} />}
        </>
    )
}