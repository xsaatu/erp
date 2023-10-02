import Navbar from "@/Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


export default function View(props) {
    
    const produk = props.viewProduct;
    const tanggal = props.tanggalProcess;
    const tanggalPesan = props.tanggal[0];
    
    // Render 1
    // const [product, setProduct] = useState(produk);

    // useEffect(() => {
    //     if (Object.keys(product.process1).length === 0) {
    //         return <tr>
    //                 <td>1</td>
    //                 <td>{product.process1}</td> 
    //                 <td>{product.estimasi1}</td>
    //                 <td>actual</td> 
    //                 <td>{tanggal[15].delivery_date}</td>
    //             </tr>
    //       }
      
    //       if (Object.keys(product.process1).length > 0) {
    //         return <tr>
    //                 <td>1</td>
    //                 <td>{product.process1}</td> 
    //                 <td>{product.estimasi1}</td>
    //                 <td>actual</td> 
    //                 {/* <td>{tanggal[15].delivery_date}</td> */}
    //             </tr>
    //       }
    // }, [product]);

    // Render 2
    // const Detail = () => {
    //     if((produk.process1).length > 0) {
    //        return <tr>
    //                 <td>1</td>
    //                 <td>{produk.process1}</td> 
    //                 <td>{produk.estimasi1}</td>
    //                 <td>actual</td> 
    //                 <td>{tanggal.delivery_date}</td>
    //             </tr>
    //             if((produk.process2).length > 0) {

    //             }
    //     } else {
    //         console.log("EMPTY!!!");
    //     }

    // }

    // Render 3
    const nomorProses = Array.from({ length: 15 }, (_, index) => index + 1);

    console.log(props);
    return <>

        <Navbar />

        <div id="head_product">
            <div className="container">
                <div className="grid grid-cols-3 gap-3 m-5">
                    <div><input className="input-xs" value={props.viewProduct.so} disabled></input></div>
                    <div><input className="input-xs" value={tanggalPesan.tanggal_pesan} disabled></input></div>
                    <div><input className="input-xs" value={tanggal[0].delivery_date} disabled></input></div>
                </div>
            </div>
        </div>

        <div className="overflow-x-auto m-5">
            <table className="table table-md">
            <thead>
                <tr>
                <th>OP</th> 
                <th>Process</th> 
                <th>Estimasi</th> 
                <th>Actual</th> 
                <th>Tanggal Proses</th> 
                </tr>
            </thead> 
            <tbody>
                {nomorProses.map((nomor) => {
                const processKey = `process${nomor}`;
                const estimasiKey = `estimasi${nomor}`;
                const tanggalKey = tanggal.length - nomor;

                // Cek apakah proses kosong
                const isProcessEmpty = !produk[processKey];

                if (!isProcessEmpty) {
                return (
                    <tr key={nomor}>
                    <td>{nomor}</td>
                    <td>{produk[processKey]}</td>
                    <td>{produk[estimasiKey]}</td>
                    <td>Actual</td>
                    <td>{tanggal[tanggalKey]?.delivery_date}</td>
                    </tr>
                );
                } else {
                console.log(`Proses ${nomor} EMPTY!!!`);
                return null; // Jika proses kosong, return null agar tidak ditampilkan dalam tabel
                }
            })}

            <tr>
                <td>998</td>
                <td>Quality Process</td>
                <td>0</td>
                <td>Actual</td>
                <td>{tanggal[1].delivery_date}</td>
            </tr>
            <tr>
                <td>999</td>
                <td>Finish</td>
                <td>0</td>
                <td>Actual</td>
                <td>{tanggal[0].delivery_date}</td>
            </tr>

            {/* {viewProduct.map((process, index) => (
                    <tr key={index}>
                        <td>{process.step}</td>
                        <td>{process.process}</td>
                        <td>{process.estimasi}</td>
                        <td>{process.actual}</td>
                        <td>{process.delivery_date}</td>
                    </tr>
                ))} */}

                {/* <tr>
                    <td>1</td>
                    <td>{produk.process1}</td> 
                    <td>{produk.estimasi1}</td>
                    <td>actual</td> 
                    <td>{tanggal[15].delivery_date}</td>
                </tr>
                
                <tr>
                    <td>1</td>
                    <td>{produk.process2}</td> 
                    <td>{produk.estimasi2}</td>
                    <td>actual</td> 
                    <td>{tanggal[14].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process3}</td> 
                    <td>{produk.estimasi3}</td>
                    <td>actual</td> 
                    <td>{tanggal[13].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process4}</td> 
                    <td>{produk.estimasi4}</td>
                    <td>actual</td> 
                    <td>{tanggal[12].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process5}</td> 
                    <td>{produk.estimasi5}</td>
                    <td>actual</td> 
                    <td>{tanggal[11].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process6}</td> 
                    <td>{produk.estimasi6}</td>
                    <td>actual</td> 
                    <td>{tanggal[10].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process7}</td> 
                    <td>{produk.estimasi7}</td>
                    <td>actual</td> 
                    <td>{tanggal[9].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process8}</td> 
                    <td>{produk.estimasi8}</td>
                    <td>actual</td> 
                    <td>{tanggal[8].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process9}</td> 
                    <td>{produk.estimasi9}</td>
                    <td>actual</td> 
                    <td>{tanggal[7].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process10}</td> 
                    <td>{produk.estimasi10}</td>
                    <td>actual</td> 
                    <td>{tanggal[6].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process11}</td> 
                    <td>{produk.estimasi11}</td>
                    <td>actual</td> 
                    <td>{tanggal[5].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process12}</td> 
                    <td>{produk.estimasi12}</td>
                    <td>actual</td> 
                    <td>{tanggal[4].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process13}</td> 
                    <td>{produk.estimasi13}</td>
                    <td>actual</td> 
                    <td>{tanggal[3].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process14}</td> 
                    <td>{produk.estimasi14}</td>
                    <td>actual</td> 
                    <td>{tanggal[2].delivery_date}</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{produk.process15}</td> 
                    <td>{produk.estimasi15}</td>
                    <td>actual</td> 
                    <td>{tanggal[1].delivery_date}</td>
                </tr> */}
            </tbody> 
            </table>
        </div>
    </>
}