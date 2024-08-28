import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import AddProductPage from './components/AddProductPage'
import { useState } from 'react';

export default function App() {
    const [page, setPage] = useState('login')

    return (
        <>
            <div className='p-5'>
                {page === 'home' && <HomePage setPage={setPage} />}
                {page === 'login' && <LoginPage setPage={setPage} />}
                {page === 'add' && <AddProductPage setPage={setPage} />}
            </div>
        </>
    )
}