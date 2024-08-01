import { useState } from "react";

export default function ProductsForm() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState("")
    const [stock, setStock] = useState(0)
    const [categoryId, setCategoryId] = useState("")
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
    ]);

    return (
        <>
            <form>
                <div className=" grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => setDescription(e.target.value)}
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
                            onChange={(e) => setPrice(e.target.value)}
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
                            onChange={(e) => setStock(e.target.value)}
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
                            onChange={(e) => setImgUrl(e.target.value)}
                            type="text"
                            placeholder="Image URL"
                            className="w-full input input-bordered input-accent"
                        />
                        {/* <a href="" class="text-xs ml-1 text-gray-600 hover:text-primary">Want to upload a file instead?</a> */}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Category</span>
                        </label>
                        <select
                            className="w-full input input-bordered input-accent"
                            onChange={(e) => setCategoryId(e.target.value)}
                            name="category"
                            id=""
                        >
                            {categories.map(c => {
                                return <option key={c.id} value={c.id}>{c.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <button className="btn btn-accent mt-10 w-full">Add New Product</button>
                </div>
            </form>
        </>
    )
}