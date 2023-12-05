
export default function Nav({ setPage }) {
    function handleLogout() {
        localStorage.clear()
        setPage('login')
    }
    return (<>
        <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow">
            <div className="navbar-center">
                <a onClick={() => setPage('home')} className="text-2xl font-bold px-6">
                    <span className="text-accent">Home</span>
                </a>
            </div>
        </nav>
    </>)
}