import Navbar from '../components/Navbar'
import { useEffect, useState } from "react"
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
            Toastify({
                text: error.response.data.error,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#F87171",
                    color: "#000000"
                }
            }).showToast();
        }
    }

    function getFormData(fieldName, event) {
        let value = event.target.value
        if (fieldName === 'price' || fieldName === 'stock' || fieldName === 'categoryId') {
            value = +event.target.value
        }

        setForm((prevData) => {
            return {
                ...prevData,
                [fieldName]: value
            }
        });
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault()

            const { data } = await axios.post(`https://h8-phase2-gc.vercel.app/apis/branded-things/products`, form, {
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
                    background: "#34D399",
                    color: "#000000"
                },
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
                    background: "#F87171",
                    color: "#000000"
                }
            }).showToast();
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    return (
        <>
            <Navbar setPage={setPage} />
            {/* add form */}
            <form className="p-5 mt-5 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-red-400" onSubmit={handleSubmit}>
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
                            onChange={(event) => getFormData("name", event)}
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
                            onChange={(event) => getFormData("description", event)}
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
                            onChange={(event) => getFormData("price", event)}
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
                            onChange={(event) => getFormData("stock", event)}
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
                            onChange={(event) => getFormData("imgUrl", event)}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Category</span>
                        </label>
                        <select
                            className="rounded-2xl w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            name="category"
                            onChange={(event) => getFormData("categoryId", event)}
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
                    <button className="w-full mt-5 py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Add New Product
                    </button>
                </div>
            </form>
        </>
    )
}