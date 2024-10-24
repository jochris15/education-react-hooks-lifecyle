import { useState } from "react"
import Navbar from '../components/Navbar'

export default function AddProductPage({ setPage }) {
    const [categories, setCategories] = useState([
        {
            "id": 1,
            "name": "calco",
            "createdAt": "2024-01-08T08:48:03.618Z",
            "updatedAt": "2024-01-08T08:48:03.618Z"
        },
        {
            "id": 2,
            "name": "vae",
            "createdAt": "2024-01-08T08:48:03.686Z",
            "updatedAt": "2024-01-08T08:48:03.686Z"
        },
        {
            "id": 3,
            "name": "aut",
            "createdAt": "2024-01-08T08:48:03.755Z",
            "updatedAt": "2024-01-08T08:48:03.755Z"
        },
        {
            "id": 4,
            "name": "brevis",
            "createdAt": "2024-01-08T08:48:03.823Z",
            "updatedAt": "2024-01-08T08:48:03.823Z"
        },
        {
            "id": 5,
            "name": "molestiae",
            "createdAt": "2024-01-08T08:48:03.891Z",
            "updatedAt": "2024-01-08T08:48:03.891Z"
        },
        {
            "id": 6,
            "name": "mollitia",
            "createdAt": "2024-01-08T08:48:03.959Z",
            "updatedAt": "2024-01-08T08:48:03.959Z"
        },
        {
            "id": 7,
            "name": "ager",
            "createdAt": "2024-01-08T08:48:04.027Z",
            "updatedAt": "2024-01-08T08:48:04.027Z"
        },
        {
            "id": 8,
            "name": "temporibus",
            "createdAt": "2024-01-08T08:48:04.096Z",
            "updatedAt": "2024-01-08T08:48:04.096Z"
        },
        {
            "id": 9,
            "name": "confido",
            "createdAt": "2024-01-08T08:48:04.164Z",
            "updatedAt": "2024-01-08T08:48:04.164Z"
        },
        {
            "id": 10,
            "name": "studio",
            "createdAt": "2024-01-08T08:48:04.232Z",
            "updatedAt": "2024-01-08T08:48:04.232Z"
        }
    ])

    return (
        <>
            <Navbar setPage={setPage} />
            {/* add form */}
            <form className="p-5 mt-5 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-red-400">
                <h1 className="text-2xl font-bold text-center mb-4">Add New Product</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Description"
                            className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Price"
                            className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Stock"
                            className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Image (URL)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Image URL"
                            className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Category</span>
                        </label>
                        <select
                            className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            name="category"
                            id=""
                        >
                            {categories.map((c) => {
                                return (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="w-full mt-5 justify-center py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Add New Product
                    </button>
                </div>
            </form>
        </>
    )
}