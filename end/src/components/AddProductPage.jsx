import { useState } from "react"
import Navbar from "./Navbar"

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
            <form>
                <div className=" grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Description"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Price"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Stock"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Image (URL)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="w-full input input-bordered input-accent"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Category</span>
                        </label>
                        <select
                            className="w-full input input-bordered input-accent"
                            name="category"
                            id=""
                        >
                            {categories.map(c => {
                                return <option key={c.id} value={c.id}>{c.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='mt-5'>
                    <button className="btn btn-accent w-full">Add New Product</button>
                </div>
            </form>
        </>
    )
}