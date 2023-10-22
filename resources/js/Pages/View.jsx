import Navbar from "@/Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


export default function View(props) {
    
    const produk = props.produk[0];
    const tanggal = props.tanggalProcess;
    const tanggalPesan = props.tanggal;

    // Render 3
    const nomorProses = Array.from({ length: 15 }, (_, index) => index + 1);

    console.log(props);
    return <>

        <Navbar />

        <div id="head_product">
            <div className="container">
                <div className="grid grid-cols-3 gap-3 m-5">
                    <div><input className="input-xs" value={props.produk.no} disabled></input></div>
                    {/* <div><input className="input-xs" value={tanggalPesan.tanggal_pesan} disabled></input></div> */}
                    {/* <div><input className="input-xs" value={tanggal[0].delivery_date} disabled></input></div> */}
                </div>
            </div>
        </div>

        <div className="overflow-x-auto m-5">
            <table className="table table-md">
            <thead>
                <tr>
                <th>Number</th> 
                <th>Process</th> 
                <th>Estimasi</th> 
                <th>Actual</th> 
                <th>Tanggal Proses</th> 
                <th>wait</th> 
                </tr>
            </thead> 
            <tbody>
                {nomorProses.map((nomor) => {
                const processKey = `process${nomor}`;
                const estimasiKey = `estimasi${nomor}`;
                const waitKey = `wait${nomor}`;
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
                    <td>{produk[waitKey]}</td>
                    </tr>
                );
                } else {
                console.log(`Proses ${nomor} EMPTY!!!`);
                return null; // Jika proses kosong, return null agar tidak ditampilkan dalam tabel
                }
            })}
            </tbody> 
            </table>
        </div>
    </>
}

