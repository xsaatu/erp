import { Link } from "@inertiajs/react"

const isSearch = (produk) => {
    return <div className="overflow-x-auto">
      <table className="table table-zebra">
          <thead>
            <tr>
              <th>ID Product</th>
              <th>Nama</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {produk.map((data, i) => {
            return <tr key={i}>
                  <td>{data.so}</td>
                  <td>{data.name}</td>
                  <td><Link href="edit" as="button" data={{id: data.id}}className="btn btn-info btn-xs text-white">Edit</Link></td>
                  <td><Link href="view" data={{id: data.id}} as="button" className="btn btn-info btn-xs text-white">View</Link></td>
                  <td><Link  as="button" className="btn btn-error btn-xs text-white">Delete</Link></td>
                </tr>
           })}

          </tbody>
        </table>
      </div>
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