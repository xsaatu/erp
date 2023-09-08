import { router } from "@inertiajs/react";
import { useState } from "react";


export default function AddMachine() {
    const [kode, setKode] = useState('');
    const [nama, setNama] = useState('');
    const [description, setDescription] = useState('');
    const [wait, setWait] = useState('');

    const HandleSubmit = () => {
        const data = {
            kode, nama, description, wait
        };
        router.post('/machine', data);
        setKode('')
        setNama('')
        setDescription('')
        setWait('')
    }
    
    return (
        <>
            <button className="btn btn-info" onClick={()=>window.my_modal_5.showModal()}>Add Machine</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="p-6 bg-white border-b border-grey-200">
                    <input type="text" placeholder="Kode" className="m-3 input w-full" onChange={(kode) => setKode(kode.target.value)} value={kode} />
                    <input type="text" placeholder="Nama" className="m-3 input w-full" onChange={(nama) => setNama(nama.target.value)} value={nama} />
                    <input type="text" placeholder="Description" className="m-3 input w-full" onChange={(description) => setDescription(description.target.value)} value={description} />
                    <input type="text" placeholder="Tunggu" className="m-3 input w-full" onChange={(wait) => setWait(wait.target.value)} value={wait} />
                    <button className='btn btn-primary m-2' onClick={() => HandleSubmit()}>Submit</button>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Cancel</button>
                    </form>
                </div>
            </div>
            </dialog>
        </>
    )

}