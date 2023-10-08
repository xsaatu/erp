import { router } from "@inertiajs/react";
import { useState } from "react";

export default function AddData(props) {
    // console.log(props.machine.data);

    const [so, setSo] = useState('');
    const [name, setName] = useState('');
    const [tanggal_pesan, setTanggal_pesan] = useState('');
    const [tengat_waktu, setTengat_waktu] = useState('');
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
            so, 
            name,
            tanggal_pesan,
            tengat_waktu,
            process1, estimasi1, 
            process2, estimasi2, 
            process3, estimasi3, 
            process4, estimasi4, 
            process5, estimasi5, 
            process6, estimasi6, 
            process7, estimasi7, 
            process8, estimasi8, 
            process9, estimasi9, 
            process10, estimasi10, 
            process11, estimasi11, 
            process12, estimasi12, 
            process13, estimasi13, 
            process14, estimasi14, 
            process15, estimasi15, 
            est
        };
        router.post('/product', data);
        setSo('')
        setName('')
        setTanggal_pesan('')
        setTengat_waktu('')
        setProcess1('')
        setEstimasi1('')
        setProcess2('')
        setEstimasi2('')
        setProcess3('')
        setEstimasi3('')
        setProcess4('')
        setEstimasi4('')
        setProcess5('')
        setEstimasi5('')
        setProcess6('')
        setEstimasi6('')
        setProcess7('')
        setEstimasi7('')
        setProcess8('')
        setEstimasi8('')
        setProcess9('')
        setEstimasi9('')
        setProcess10('')
        setEstimasi10('')
        setProcess11('')
        setEstimasi11('')
        setProcess12('')
        setEstimasi12('')
        setProcess13('')
        setEstimasi13('')
        setProcess14('')
        setEstimasi14('')
        setProcess15('')
        setEstimasi15('')
        setEst('')
    };

    // const mesins = [
    //     {name: "giling", waittime: 5},
    //     { name: "potong", waittime: 10},
    //     { name: "press", waittime: 0.5},
    // ]

    const machine = props.machine.data;

    // console.log(machine);
    const Select = ({dvalue, change}) => {
        return <select className="select w-full max-w-xs" defaultValue={dvalue} onChange={(dvalue) => change(dvalue.target.value)}>
        <option disabled selected>Pilih Mesin</option>
            {machine.map((mesin, i) => (
                <option key={i} value={mesin.nama}>{mesin.nama}</option>
            ))}
        </select>
    }


    return (
        <>
            <button className="btn btn-info" onClick={()=>window.my_modal_1.showModal()}>Add Data</button>
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="p-6 bg-white border-b border-grey-200">
                    <label><span className="block">Nomor Produk</span></label>
                    <input type="text" placeholder="Nomor Produk" className="m-3 input w-full" onChange={(so) => setSo(so.target.value)} value={so} />
                    
                    <label><span className="block">Nama</span ></label>
                    <input type="text" placeholder="Nama" className="m-3 input w-full" onChange={(name) => setName(name.target.value)} value={name} />
                    
                    <label><span className="block">Tanggal Pesan</span></label>
                    <input type="date" className="m-3 input w-full" onChange={(tanggal_pesan) => setTanggal_pesan(tanggal_pesan.target.value)}/>
                    
                    <label><span className="block">Tengat Waktu</span></label>
                    <input type="date" className="m-3 input w-full" onChange={(tengat_waktu) => setTengat_waktu(tengat_waktu.target.value)}/>
                    
                    <label><span className="block">Proses 1</span></label>
                    <Select dvalue={process1} change={setProcess1}/>
                    <input type="number" placeholder="Estimasi 1" className="m-3 input w-full" onChange={(estimasi1) => setEstimasi1(estimasi1.target.value)} value={estimasi1} />
                    
                    <label><span className="block">Proses 2</span></label>
                    <Select dvalue={process2} change={setProcess2}/>
                    {/* <input type="text" placeholder="Process 2" className="m-3 input w-full" onChange={(process2) => setProcess2(process2.target.value)} value={process2} /> */}
                    <input type="number" placeholder="Estimasi 2" className="m-3 input w-full" onChange={(estimasi2) => setEstimasi2(estimasi2.target.value)} value={estimasi2} />
                    
                    <label><span className="block">Proses 3</span></label>
                    <Select dvalue={process3} change={setProcess3}/>
                    {/* <input type="text" placeholder="Process 3" className="m-3 input w-full" onChange={(process3) => setProcess3(process3.target.value)} value={process3} /> */}
                    <input type="number" placeholder="Estimasi 3" className="m-3 input w-full" onChange={(estimasi3) => setEstimasi3(estimasi3.target.value)} value={estimasi3} />
                    
                    <label><span className="block">Proses 4</span></label>
                    <Select dvalue={process4} change={setProcess4}/>
                    {/* <input type="text" placeholder="Process 4" className="m-3 input w-full" onChange={(process4) => setProcess4(process4.target.value)} value={process4} /> */}
                    <input type="number" placeholder="Estimasi 4" className="m-3 input w-full" onChange={(estimasi4) => setEstimasi4(estimasi4.target.value)} value={estimasi4} />
                    
                    <label><span className="block">Proses 5</span></label>
                    <Select dvalue={process5} change={setProcess5}/>
                    {/* <input type="text" placeholder="Process 5" className="m-3 input w-full" onChange={(process5) => setProcess5(process5.target.value)} value={process5} /> */}
                    <input type="number" placeholder="Estimasi 5" className="m-3 input w-full" onChange={(estimasi5) => setEstimasi5(estimasi5.target.value)} value={estimasi5} />
                    
                    <label><span className="block">Proses 6</span></label>
                    <Select dvalue={process6} change={setProcess6}/>
                    {/* <input type="text" placeholder="Process 6" className="m-3 input w-full" onChange={(process6) => setProcess6(process6.target.value)} value={process6} /> */}
                    <input type="number" placeholder="Estimasi 6" className="m-3 input w-full" onChange={(estimasi6) => setEstimasi6(estimasi6.target.value)} value={estimasi6} />
                    
                    <label><span className="block">Proses 7</span></label>
                    <Select dvalue={process7} change={setProcess7}/>
                    {/* <input type="text" placeholder="Process 7" className="m-3 input w-full" onChange={(process7) => setProcess7(process7.target.value)} value={process7} /> */}
                    <input type="number" placeholder="Estimasi 7" className="m-3 input w-full" onChange={(estimasi7) => setEstimasi7(estimasi7.target.value)} value={estimasi7} />
                    
                    <label><span className="block">Proses 8</span></label>
                    <Select dvalue={process8} change={setProcess8}/>
                    {/* <input type="text" placeholder="Process 8" className="m-3 input w-full" onChange={(process8) => setProcess8(process8.target.value)} value={process8} /> */}
                    <input type="number" placeholder="Estimasi 8" className="m-3 input w-full" onChange={(estimasi8) => setEstimasi8(estimasi8.target.value)} value={estimasi8} />
                    
                    <label><span className="block">Proses 9</span></label>
                    <Select dvalue={process9} change={setProcess9}/>
                    {/* <input type="text" placeholder="Process 9" className="m-3 input w-full" onChange={(process9) => setProcess9(process9.target.value)} value={process9} /> */}
                    <input type="number" placeholder="Estimasi 9" className="m-3 input w-full" onChange={(estimasi9) => setEstimasi9(estimasi9.target.value)} value={estimasi9} />
                    
                    <label><span className="block">Proses 10</span></label>
                    <Select dvalue={process10} change={setProcess10}/>
                    {/* <input type="text" placeholder="Process 10" className="m-3 input w-full" onChange={(process10) => setProcess10(process10.target.value)} value={process10} /> */}
                    <input type="number" placeholder="Estimasi 10" className="m-3 input w-full" onChange={(estimasi10) => setEstimasi10(estimasi10.target.value)} value={estimasi10} />
                    
                    <label><span className="block">Proses 11</span></label>
                    <Select dvalue={process11} change={setProcess11}/>
                    {/* <input type="text" placeholder="Process 11" className="m-3 input w-full" onChange={(process11) => setProcess11(process11.target.value)} value={process11} /> */}
                    <input type="number" placeholder="Estimasi 11" className="m-3 input w-full" onChange={(estimasi11) => setEstimasi11(estimasi11.target.value)} value={estimasi11} />
                    
                    <label><span className="block">Proses 12</span></label>
                    <Select dvalue={process12} change={setProcess12}/>
                    {/* <input type="text" placeholder="Process 12" className="m-3 input w-full" onChange={(process12) => setProcess12(process12.target.value)} value={process12} /> */}
                    <input type="number" placeholder="Estimasi 12" className="m-3 input w-full" onChange={(estimasi12) => setEstimasi12(estimasi12.target.value)} value={estimasi12} />
                    
                    <label><span className="block">Proses 13</span></label>
                    <Select dvalue={process13} change={setProcess13}/>
                    {/* <input type="text" placeholder="Process 13" className="m-3 input w-full" onChange={(process13) => setProcess13(process13.target.value)} value={process13} /> */}
                    <input type="number" placeholder="Estimasi 13" className="m-3 input w-full" onChange={(estimasi13) => setEstimasi13(estimasi13.target.value)} value={estimasi13} />
                    
                    <label><span className="block">Proses14</span></label>
                    <Select dvalue={process14} change={setProcess14}/>
                    {/* <input type="text" placeholder="Process 14" className="m-3 input w-full" onChange={(process14) => setProcess14(process14.target.value)} value={process14} /> */}
                    <input type="number" placeholder="Estimasi 14" className="m-3 input w-full" onChange={(estimasi14) => setEstimasi14(estimasi14.target.value)} value={estimasi14} />
                    
                    <label><span className="block">Proses 15</span></label>
                    <Select dvalue={process15} change={setProcess15}/>
                    {/* <input type="text" placeholder="Process 15" className="m-3 input w-full" onChange={(process15) => setProcess15(process15.target.value)} value={process15} /> */}
                    <input type="number" placeholder="Estimasi 15" className="m-3 input w-full" onChange={(estimasi15) => setEstimasi15(estimasi15.target.value)} value={estimasi15} />
                    
                    <label><span className="block">Waktu</span></label>
                    <input type="number" placeholder="Estimasi" className="m-3 input w-full" onChange={(est) => setEst(est.target.value)} value={est} />
                    
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