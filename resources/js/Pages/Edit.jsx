import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Edit(props) {

    const product = props.myProduct;
    const machine = props.myMachine.data;

    console.log(props);

    const [so, setSo] = useState(product.so);
    const [name, setName] = useState(product.name);
    const [tanggal_pesan, setTanggal_pesan] = useState(product.tanggal_pesan);
    const [tengat_waktu, setTengat_waktu] = useState(product.tengat_waktu);
    const [process1, setProcess1] = useState(product.process1);
    const [estimasi1, setEstimasi1] = useState(product.estimasi1);
    const [process2, setProcess2] = useState(product.process2);
    const [estimasi2, setEstimasi2] = useState(product.estimasi2);
    const [process3, setProcess3] = useState(product.process3);
    const [estimasi3, setEstimasi3] = useState(product.estimasi3);
    const [process4, setProcess4] = useState(product.process4);
    const [estimasi4, setEstimasi4] = useState(product.estimasi4);
    const [process5, setProcess5] = useState(product.process5);
    const [estimasi5, setEstimasi5] = useState(product.estimasi5);
    const [process6, setProcess6] = useState(product.process6);
    const [estimasi6, setEstimasi6] = useState(product.estimasi6);
    const [process7, setProcess7] = useState(product.process7);
    const [estimasi7, setEstimasi7] = useState(product.estimasi7);
    const [process8, setProcess8] = useState(product.process8);
    const [estimasi8, setEstimasi8] = useState(product.estimasi8);
    const [process9, setProcess9] = useState(product.process9);
    const [estimasi9, setEstimasi9] = useState(product.estimasi9);
    const [process10, setProcess10] = useState(product.process10);
    const [estimasi10, setEstimasi10] = useState(product.estimasi10);
    const [process11, setProcess11] = useState(product.process11);
    const [estimasi11, setEstimasi11] = useState(product.estimasi11);
    const [process12, setProcess12] = useState(product.process12);
    const [estimasi12, setEstimasi12] = useState(product.estimasi12);
    const [process13, setProcess13] = useState(product.process13);
    const [estimasi13, setEstimasi13] = useState(product.estimasi13);
    const [process14, setProcess14] = useState(product.process14);
    const [estimasi14, setEstimasi14] = useState(product.estimasi14);
    const [process15, setProcess15] = useState(product.process15);
    const [estimasi15, setEstimasi15] = useState(product.estimasi15);
    const [est, setEst] = useState(product.est);

    const handleSubmit = () => {
        const data = {
            id: product.id,
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
        router.post('/product/update', data);
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


    // console.log(machine);
    const Select = ({dvalue, change}) => {
        return <select className="select w-full max-w-xs" defaultValue={''} value={dvalue} onChange={(dvalue) => change(dvalue.target.value)}>
        <option selected></option>
            {machine.map((mesin, i) => (
                <option key={i} value={mesin.nama}>{mesin.nama}</option>
            ))}
        </select>
    }


    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="col">
                        <label><span className="block">Nomor Produk</span></label>
                        <input type="text" placeholder="Nomor Produk" className="m-3 input w-full" onChange={(so) => setSo(so.target.value)} defaultValue={product.so} />
                        
                        <label><span className="block">Nama</span ></label>
                        <input type="text" placeholder="Nama" className="m-3 input w-full" onChange={(name) => setName(name.target.value)} defaultValue={product.name} />
                        
                        <label><span className="block">Tanggal Pesan</span></label>
                        <input type="date" className="m-3 input w-full" onChange={(tanggal_pesan) => setTanggal_pesan(tanggal_pesan.target.value)} defaultValue={product.tanggal_pesan}/>
                        
                        <label><span className="block">Tengat Waktu</span></label>
                        <input type="date" className="m-3 input w-full" onChange={(tengat_waktu) => setTengat_waktu(tengat_waktu.target.value)} defaultValue={product.tengat_waktu}/>
                        
                        <label><span className="block">Proses 1</span></label>
                        <Select dvalue={process1} change={setProcess1}/>
                        <input type="number" placeholder="Estimasi 1" className="m-3 input w-full" onChange={(estimasi1) => setEstimasi1(estimasi1.target.value)} defaultValue={product.estimasi1} />
                        
                        <label><span className="block">Proses 2</span></label>
                        <Select dvalue={process2} change={setProcess2}/>
                        {/* <input type="text" placeholder="Process 2" className="m-3 input w-full" onChange={(process2) => setProcess2(process2.target.value)} value={process2} /> */}
                        <input type="number" placeholder="Estimasi 2" className="m-3 input w-full" onChange={(estimasi2) => setEstimasi2(estimasi2.target.value)} defaultValue={product.estimasi2} />
                        
                        <label><span className="block">Proses 3</span></label>
                        <Select dvalue={process3} change={setProcess3}/>
                        {/* <input type="text" placeholder="Process 3" className="m-3 input w-full" onChange={(process3) => setProcess3(process3.target.value)} value={process3} /> */}
                        <input type="number" placeholder="Estimasi 3" className="m-3 input w-full" onChange={(estimasi3) => setEstimasi3(estimasi3.target.value)} defaultValue={product.estimasi3} />
                        
                        <label><span className="block">Proses 4</span></label>
                        <Select dvalue={process4} change={setProcess4}/>
                        {/* <input type="text" placeholder="Process 4" className="m-3 input w-full" onChange={(process4) => setProcess4(process4.target.value)} value={process4} /> */}
                        <input type="number" placeholder="Estimasi 4" className="m-3 input w-full" onChange={(estimasi4) => setEstimasi4(estimasi4.target.value)} defaultValue={product.estimasi4} />
                        
                        <label><span className="block">Proses 5</span></label>
                        <Select dvalue={process5} change={setProcess5}/>
                        {/* <input type="text" placeholder="Process 5" className="m-3 input w-full" onChange={(process5) => setProcess5(process5.target.value)} value={process5} /> */}
                        <input type="number" placeholder="Estimasi 5" className="m-3 input w-full" onChange={(estimasi5) => setEstimasi5(estimasi5.target.value)} defaultValue={product.estimasi5} />
                        
                        <label><span className="block">Proses 6</span></label>
                        <Select dvalue={process6} change={setProcess6}/>
                        {/* <input type="text" placeholder="Process 6" className="m-3 input w-full" onChange={(process6) => setProcess6(process6.target.value)} value={process6} /> */}
                        <input type="number" placeholder="Estimasi 6" className="m-3 input w-full" onChange={(estimasi6) => setEstimasi6(estimasi6.target.value)} defaultValue={product.estimasi6} />
                        
                        <label><span className="block">Proses 7</span></label>
                        <Select dvalue={process7} change={setProcess7}/>
                        {/* <input type="text" placeholder="Process 7" className="m-3 input w-full" onChange={(process7) => setProcess7(process7.target.value)} value={process7} /> */}
                        <input type="number" placeholder="Estimasi 7" className="m-3 input w-full" onChange={(estimasi7) => setEstimasi7(estimasi7.target.value)} defaultValue={product.estimasi7} />
                        
                        <label><span className="block">Proses 8</span></label>
                        <Select dvalue={process8} change={setProcess8}/>
                        {/* <input type="text" placeholder="Process 8" className="m-3 input w-full" onChange={(process8) => setProcess8(process8.target.value)} value={process8} /> */}
                        <input type="number" placeholder="Estimasi 8" className="m-3 input w-full" onChange={(estimasi8) => setEstimasi8(estimasi8.target.value)} defaultValue={product.estimasi8} />
                        
                        <label><span className="block">Proses 9</span></label>
                        <Select dvalue={process9} change={setProcess9}/>
                        {/* <input type="text" placeholder="Process 9" className="m-3 input w-full" onChange={(process9) => setProcess9(process9.target.value)} value={process9} /> */}
                        <input type="number" placeholder="Estimasi 9" className="m-3 input w-full" onChange={(estimasi9) => setEstimasi9(estimasi9.target.value)} defaultValue={product.estimasi9} />
                        
                        <label><span className="block">Proses 10</span></label>
                        <Select dvalue={process10} change={setProcess10}/>
                        {/* <input type="text" placeholder="Process 10" className="m-3 input w-full" onChange={(process10) => setProcess10(process10.target.value)} value={process10} /> */}
                        <input type="number" placeholder="Estimasi 10" className="m-3 input w-full" onChange={(estimasi10) => setEstimasi10(estimasi10.target.value)} defaultValue={product.estimasi10} />
                        
                        <label><span className="block">Proses 11</span></label>
                        <Select dvalue={process11} change={setProcess11}/>
                        {/* <input type="text" placeholder="Process 11" className="m-3 input w-full" onChange={(process11) => setProcess11(process11.target.value)} value={process11} /> */}
                        <input type="number" placeholder="Estimasi 11" className="m-3 input w-full" onChange={(estimasi11) => setEstimasi11(estimasi11.target.value)} defaultValue={product.estimasi11} />
                        
                        <label><span className="block">Proses 12</span></label>
                        <Select dvalue={process12} change={setProcess12}/>
                        {/* <input type="text" placeholder="Process 12" className="m-3 input w-full" onChange={(process12) => setProcess12(process12.target.value)} value={process12} /> */}
                        <input type="number" placeholder="Estimasi 12" className="m-3 input w-full" onChange={(estimasi12) => setEstimasi12(estimasi12.target.value)} defaultValue={product.estimasi12} />
                        
                        <label><span className="block">Proses 13</span></label>
                        <Select dvalue={process13} change={setProcess13}/>
                        {/* <input type="text" placeholder="Process 13" className="m-3 input w-full" onChange={(process13) => setProcess13(process13.target.value)} value={process13} /> */}
                        <input type="number" placeholder="Estimasi 13" className="m-3 input w-full" onChange={(estimasi13) => setEstimasi13(estimasi13.target.value)} defaultValue={product.estimasi13} />
                        
                        <label><span className="block">Proses14</span></label>
                        <Select dvalue={process14} change={setProcess14}/>
                        {/* <input type="text" placeholder="Process 14" className="m-3 input w-full" onChange={(process14) => setProcess14(process14.target.value)} value={process14} /> */}
                        <input type="number" placeholder="Estimasi 14" className="m-3 input w-full" onChange={(estimasi14) => setEstimasi14(estimasi14.target.value)} defaultValue={product.estimasi14} />
                        
                        <label><span className="block">Proses 15</span></label>
                        <Select dvalue={process15} change={setProcess15}/>
                        {/* <input type="text" placeholder="Process 15" className="m-3 input w-full" onChange={(process15) => setProcess15(process15.target.value)} value={process15} /> */}
                        <input type="number" placeholder="Estimasi 15" className="m-3 input w-full" onChange={(estimasi15) => setEstimasi15(estimasi15.target.value)} defaultValue={product.estimasi15} />
                        
                        <label><span className="block">Waktu</span></label>
                        <input type="number" placeholder="Estimasi" className="m-3 input w-full" onChange={(est) => setEst(est.target.value)} defaultValue={product.est} />
                        
                        <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}