import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import axios from 'axios'
import Toastify from 'toastify-js'

export default function AddProductPage({ setPage }) {
    const [categories, setCategories] = useState([])
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        imgUrl: "",
        categoryId: 0
    })

    async function fetchCategories() {
        try {
            const { data } = await axios.get(`https://h8-phase2-gc.vercel.app/apis/branded-things/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            setCategories(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    function getFormData(fieldName, event) {
        let value = event.target.value;
        setForm((prevData) => ({ ...prevData, [fieldName]: value }));
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault()

            const body = {
                name: form.name,
                description: form.description,
                price: +form.price,
                stock: +form.stock,
                imgUrl: form.imgUrl,
                categoryId: +form.categoryId
            }

            const { data } = await axios.post(`https://h8-phase2-gc.vercel.app/apis/branded-things/products`, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            setPage('home')

            Toastify({
                text: `Succeed add data ${data.data.name}`,
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

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            <Navbar setPage={setPage} />
            <form className="p-10" onSubmit={handleSubmit}>
                <div className=" grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full input input-bordered input-accent"
                            onChange={(event) => getFormData("name", event)}
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
                            onChange={(event) => getFormData("description", event)}
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
                            onChange={(event) => getFormData("price", event)}
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
                            onChange={(event) => getFormData("stock", event)}
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
                            onChange={(event) => getFormData("imgUrl", event)}
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
                            onChange={(event) => getFormData("categoryId", event)}
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