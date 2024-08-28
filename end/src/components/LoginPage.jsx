import axios from 'axios'
import { useState } from 'react';
import Toastify from 'toastify-js'

export default function LoginPage({ setPage }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        // karena submit itu ada refresh by default
        e.preventDefault()
        try {
            const { data } = await axios.post(`https://h8-phase2-gc.vercel.app/apis/login`, { email, password })

            localStorage.setItem('access_token', data.data.access_token)
            setPage('home')
            Toastify({
                text: "Login success",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#008000",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        } catch (error) {
            Toastify({
                text: error.response.data.error,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#FF0000",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
    }

    return (
        <>
            <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100">
                <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-200">
                    <h1 className="text-3xl font-semibold text-center text-accent-focus">
                        Log In
                    </h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="w-full input input-bordered input-accent"
                                autoComplete="current-email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full input input-bordered input-accent"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className="btn btn-accent w-full mt-5">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}