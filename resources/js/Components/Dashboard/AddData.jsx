import { router } from "@inertiajs/react";
import { useState } from "react";

export default function AddData() {

    const [so, setSo] = useState('');
    const [name, setName] = useState('');
    const [process, setProcess] = useState('');
    const [est, setEst] = useState('');

    const handleSubmit = () => {
        const data = {
            so, name, process, est
        };
        router.post('/product', data);
        setSo('')
        setName('')
        setProcess('')
        setEst('')
    };

    return (
        <>
            <button className="btn btn-info" onClick={()=>window.my_modal_5.showModal()}>Add Data</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="p-6 bg-white border-b border-grey-200">
                    <input type="text" placeholder="SO" className="m-3 input w-full" onChange={(so) => setSo(so.target.value)} value={so} />
                    <input type="text" placeholder="Nama" className="m-3 input w-full" onChange={(name) => setName(name.target.value)} value={name} />
                    <input type="text" placeholder="Process" className="m-3 input w-full" onChange={(process) => setProcess(process.target.value)} value={process} />
                    <input type="text" placeholder="Estimasi" className="m-3 input w-full" onChange={(est) => setEst(est.target.value)} value={est} />
                    <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>Submit</button>
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