export default function Navbar({ setPage }) {
    return (
        <>
            <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow">
                <div className="navbar-start">
                    <a className="text-2xl font-bold px-6"
                        onClick={() => setPage('login')}>
                        <span className="text-blue-300">Login</span>
                    </a>
                </div>
                <div className="navbar-center">
                    <a className="text-2xl font-bold px-6"
                        onClick={() => setPage('home')}>
                        <span className="text-accent">Home</span>
                    </a>
                    <a className="text-2xl font-bold px-6"
                        onClick={() => setPage('add')}>
                        <span className="text-accent">Add product</span>
                    </a>
                </div>
                <div className="navbar-end">
                    <a className="text-2xl font-bold px-6">
                        <span className="text-red-300">Logout</span>
                    </a>
                </div>
            </nav>

        </>
    )
}