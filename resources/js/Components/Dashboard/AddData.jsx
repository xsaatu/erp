import { router } from "@inertiajs/react";
import { useState } from "react";

export default function AddData() {

    const [so, setSo] = useState('');
    const [name, setName] = useState('');
    const [process1, setProcess1] = useState('');
    const [estimasi1, setEstimasi1] = useState('');
    const [process2, setProcess2] = useState('');
    const [estimasi2, setEstimasi2] = useState('');
    const [process3, setProcess3] = useState('');
    const [estimasi3, setEstimasi3] = useState('');
    const [process4, setProcess4] = useState('');
    const [estimasi4, setEstimasi4] = useState('');
    const [process5, setProcess5] = useState('');
    const [estimasi5, setEstimasi5] = useState('');
    const [process6, setProcess6] = useState('');
    const [estimasi6, setEstimasi6] = useState('');
    const [process7, setProcess7] = useState('');
    const [estimasi7, setEstimasi7] = useState('');
    const [process8, setProcess8] = useState('');
    const [estimasi8, setEstimasi8] = useState('');
    const [process9, setProcess9] = useState('');
    const [estimasi9, setEstimasi9] = useState('');
    const [process10, setProcess10] = useState('');
    const [estimasi10, setEstimasi10] = useState('');
    const [process11, setProcess11] = useState('');
    const [estimasi11, setEstimasi11] = useState('');
    const [process12, setProcess12] = useState('');
    const [estimasi12, setEstimasi12] = useState('');
    const [process13, setProcess13] = useState('');
    const [estimasi13, setEstimasi13] = useState('');
    const [process14, setProcess14] = useState('');
    const [estimasi14, setEstimasi14] = useState('');
    const [process15, setProcess15] = useState('');
    const [estimasi15, setEstimasi15] = useState('');
    const [est, setEst] = useState('');

    const handleSubmit = () => {
        const data = {
            so, name, process, est
        };
        router.post('/product', data);
        setSo('')
        setName('')
        setProcess1('')
        setEstimasi1('')
        setEst('')
    };

    return (
        <>
            <button className="btn btn-info" onClick={()=>window.my_modal_1.showModal()}>Add Data</button>
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="p-6 bg-white border-b border-grey-200">
                    <input type="text" placeholder="SO" className="m-3 input w-full" onChange={(so) => setSo(so.target.value)} value={so} />
                    <input type="text" placeholder="Nama" className="m-3 input w-full" onChange={(name) => setName(name.target.value)} value={name} />
                    <input type="text" placeholder="Process" className="m-3 input w-full" onChange={(process1) => setProcess(process1.target.value)} value={process1} />
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