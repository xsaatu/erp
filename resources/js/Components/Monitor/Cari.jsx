import { Link } from "@inertiajs/react"

const isSearch = (produk, searchQuery) => {
    return <div className="overflow-x-auto">
        <div>
          {/* <a href="/product/productpdf" target="_blank" as="button" className="btn btn-info btn-xs text-white">Download</a> */}
          <a href={`/product/productlistpdf?produk=${JSON.stringify(produk)}`} target="_blank" as="button" className="btn btn-info btn-xs text-white">Download</a>
        </div>
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
                  <td>{data.no}</td>
                  <td>{data.name}</td>
                  <td><Link href="edit"  data={{ id: data.id }} as="button" className="btn btn-info btn-xs text-white">Edit</Link></td>
                  <td><Link href="view" data={{id: data.id}} as="button" className="btn btn-info btn-xs text-white">View</Link></td>
                  <td><Link href="delete" data={{id: data.id}} method="post" as="button" className="btn btn-error btn-xs text-white">Delete</Link></td>
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
  
const ProductSearch = ({ produk, searchQuery }) => {
    return !produk ? noProduct() : isSearch(produk, searchQuery)
}


export default ProductSearch;