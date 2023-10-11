const isProduct = (product) => {
    return product.map((data, i) => {
      return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.no}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{data.name}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-inline">{data.process}</div>
            <div className="badge badge-inline">{data.tengat_waktu}</div>
            <div className="badge badge-outline">{data.est}</div>
          </div>
        </div>
      </div>
    })
  }
  
  const noProduct = () => {
    return (
      <div>Saat ini belum ada berita tersedia</div>
    )
  }
  
  const ProductLists = ({ product }) => {
    return !product ? noProduct() : isProduct(product)
  }
  
  export default ProductLists