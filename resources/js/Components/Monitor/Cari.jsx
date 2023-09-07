const isSearch = (produk) => {
    return produk.map((data, i) => {
        return <div key={i} className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Nomor Produk</div>
          <div className="stat-value">{data.so}</div>
        </div>
        
        <div className="stat place-items-center">
          <div className="stat-title">Nama</div>
          <div className="stat-value text-secondary">{data.name}</div>
        </div>
        
        <div className="stat place-items-center">
          <div className="stat-title">Estimasi</div>
          <div className="stat-value">{data.est}</div>
        </div>
        
      </div>
    })
}

const noProduct = () => {
    return (
      <div></div>
    )
}
  
const ProductSearch = ({ produk }) => {
    return !produk ? noProduct() : isSearch(produk)
}


export default ProductSearch;

// export default function Cari(props) {
//     <table border="1" cellpadding="10" cellspacing="0">
//                 <tr>
//                     <th>NP</th>
//                     <th>Nama</th>
//                     <th>Proses</th>
//                     <th>Estimasi</th>
//                 </tr>
//                 return props.produk.map((data, i) => {
//                     return <tr key={i}>
//                         <td>{data.so}</td>
//                         <td>{data.name}</td>
//                         <td>{data.process}</td>
//                         <td>{data.est}</td>
//                     </tr>
//                 })
//             </table>
// }