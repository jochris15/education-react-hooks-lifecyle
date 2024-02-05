import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import ProductsForm from './components/ProductsForm'

export default function App() {
    const [page, setPage] = useState('home')

    return (
        <>
            <Nav setPage={setPage} />
            <br />
            {page === 'home' && <Home />}
            {page === 'login' && <Login />}
            {page === 'form' && <ProductsForm />}
        </>
    )
}