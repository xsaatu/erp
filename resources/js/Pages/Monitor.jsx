import ProductLists from "@/Components/Monitor/ProductList";
import  ProductSearch from "@/Components/Monitor/cari";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import { useState } from "react";
import View from "./View";

export default function Monitor(props) {

    const [selectedTab, setSelectedTab] = useState('general');

    function GeneralTabContent() {
        return (
            <ProductSearch produk={props.produk}/>
        )
    }

    function ViewTabContent() {
        return (
          <div>
            <View produk={props}/>
          </div>
        );
      }
      
      function MachineTabContent() {
        return (
          <div>
            <h2>Machine Operation Tab Content</h2>
            {/* Isi dari tab "Machine Operation" */}
          </div>
        );
      }

    const Find = (props) => {
    
        // console.log(props.produk)
        return <div className="container grid grid-cols-3">
            <div className="col">
                <div className="mt-5 mx-auto sm:px-6 lg:px-4">
                    <form action="/product/search" method="GET" className="form-inline">
                        <div className="flex flex-wrap ">
                        <div className="input-group justify-start">
                            <input type="search" placeholder="Search Nomor" name="search" className="input input-bordered" />
                            {/* <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button> */}
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col ">
                <div>
                    <div className="tab-buttons grid grid-cols-3">
                        <div className="col">
                            <button className={`button tab-button ${selectedTab === 'general' ? 'active' : ''}`} onClick={() => setSelectedTab('general')}>
                            General
                            </button>
                        </div>
                        <div className="col">
                            <button className={`button tab-button ${selectedTab === 'view' ? 'active' : ''}`} onClick={() => setSelectedTab('view')}>
                            View
                            </button>
                        </div>
                        <div className="col">
                            <button
                            className={`button tab-button ${selectedTab === 'machine' ? 'active' : ''}`} onClick={() => setSelectedTab('machine')}>
                            Machine Operation
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    

    
    }

    // console.log(props);
    return (
        <>
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Monitor</h2>}
        >
        <Head title="Monitor"/>

        <Find produk={props.produk[0]}/>

        <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
            {/* <ProductLists product={props.product.data} /> */}
            <div className="tab-content">
                {selectedTab === 'general' && <GeneralTabContent />}
                {selectedTab === 'view' && <ViewTabContent />}
                {selectedTab === 'machine' && <MachineTabContent />}
            </div>
        </div>
            </AuthenticatedLayout>
        </>
    )
}