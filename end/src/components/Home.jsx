import Card from "../components/Card";
import axios from 'axios';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import gearLoad from "./assets/Gear-0.2s-264px.svg"

export default function Home({ setPage }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const url = 'https://phase2-aio.vercel.app'
    async function fetchProducts() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${url}/apis/pub/branded-things/products?q=${search}&limit=8&page=3&sort=ASC`);
            setProducts(data.data.query);
            console.log(data.data.query);
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error.response.data.error,
            });
        } finally {
            setLoading(false)
        }
    }

    // search
    function searchOnChange(event) {
        let newSearch = event.target.value;
        setSearch(newSearch);
    }

    useEffect(() => {
        console.log('ini use effect tanpa dependencies');
    }) // ini dijalanin setiap ada komponen rerender

    useEffect(() => {
        fetchProducts();
    }, []) // ini hanya dijalanin 1x di awal, ketika component "Home.jsx" di render

    useEffect(() => {
        fetchProducts();
    }, [search]) // useEffect ini akan jalan ketika state search ada perubahan

    // useEffect(() => {
    //     return () => {
    //         let timerInterval;
    //         Swal.fire({
    //             title: "Auto close alert!",
    //             html: "I will close in <b></b> milliseconds.",
    //             timer: 1000,
    //             timerProgressBar: true,
    //             didOpen: () => {
    //                 Swal.showLoading();
    //                 const timer = Swal.getPopup().querySelector("b");
    //                 timerInterval = setInterval(() => {
    //                     timer.textContent = `${Swal.getTimerLeft()}`;
    //                 }, 100);
    //             },
    //             willClose: () => {
    //                 clearInterval(timerInterval);
    //             }
    //         }).then((result) => {
    //             /* Read more about handling dismissals below */
    //             if (result.dismiss === Swal.DismissReason.timer) {
    //                 console.log("I was closed by the timer");
    //             }
    //         });
    //     }
    // }, []) // akan menjalankan isi dari function yang di return ketika terjadi proses unmount

    return (
        <>
            <div id="PAGE-HOME" className="p-3">

                {/* search */}
                <form action="" method="get" className="flex justify-center items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered input-accent w-24 md:w-auto mx-1 input-sm"
                        onChange={searchOnChange}
                    />
                </form>

                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <main className="grid grid-cols-4 gap-5 px-10 my-8 bg-white">
                        {products.map(product => {
                            return <Card key={product.id} product={product} />
                        })}
                    </main>
                )}
            </div >
        </>
    )
}