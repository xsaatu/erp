import Navbar from "@/Components/Navbar";


export default function View(props) {
    const produk = props.viewProduct;
    const tanggal = props.tanggalProcess;
    const tanggalPesan = props.tanggal[0];
    console.log(tanggalPesan);
    return <>

        <Navbar />

        <div id="head_product">
            <div className="container">
                <div className="grid grid-cols-3 gap-3 m-5">
                    <div><input className="input-xs" value={produk.so} disabled></input></div>
                    <div><input className="input-xs" value={props.tanggal[0].tanggal_pesan} disabled></input></div>
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
                <tr>
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
                </tr>
            </tbody> 
            </table>
        </div>
    </>
}