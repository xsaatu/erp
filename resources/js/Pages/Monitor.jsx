import ProductLists from "@/Components/Monitor/ProductList";
import  ProductSearch from "@/Components/Monitor/cari";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";



export default function Monitor(props) {
    const data = props.product;
    console.log(props);
    return (
        <>
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Monitor</h2>}
        >
        <Head title="Monitor"/>

        {/* Search bar */}
        <div className="container flex-none">
            <div className="mt-5 mx-auto sm:px-6 lg:px-4">
                <form action="/product/search" method="GET" className="form-inline">
                    <div className="flex flex-wrap ">
                    <div className="input-group justify-end">
                        <input type="search" placeholder="Search SO" name="search" className="input input-bordered" />
                        <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>

        <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
            {/* <ProductLists product={props.product.data} /> */}
                <ProductSearch produk={props.produk}/>

        </div>
            </AuthenticatedLayout>
        </>
    )
}




{/* Search */}
            {/* <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <th>NP</th>
                    <th>Nama</th>
                    <th>Proses</th>
                    <th>Estimasi</th>
                </tr>
            </table> */}
// Button
        {/* <input type="search" placeholder="Search" name="search" className="input input-bordered w-auto" />
            <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button> */}