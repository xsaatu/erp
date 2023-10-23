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
            <ProductSearch produk={props.product}/>
            // <></>
        )
    }

    function ViewTabContent({produk}) {
        console.log(produk);
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
                    <form action="/monitor/search" method="GET" className="form-inline">
                        <div className="flex flex-wrap ">
                        <div className="input-group justify-start">
                            <input type="search" placeholder="Search Nomor" name="search" className="input input-bordered" />
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

    console.log(props);
    return (
        <>
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Monitor</h2>}
        >
        <Head title="Monitor"/>

        <Find produk={props}/>

        <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
            {/* <ProductLists product={props.product.data} /> */}
            <div className="tab-content">
                {selectedTab === 'general' && <GeneralTabContent />}
                {selectedTab === 'view' && <ViewTabContent produk={props.produk[0]}/>}
                {selectedTab === 'machine' && <MachineTabContent />}
            </div>
        </div>
            </AuthenticatedLayout>
        </>
    )
}