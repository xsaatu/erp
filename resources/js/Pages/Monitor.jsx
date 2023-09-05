import ProductLists from "@/Components/Monitor/ProductList";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Monitor(props) {
    const data = props.product;
    console.log(data);
    return (
        <>
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Monitor</h2>}
        >
        <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
            <ProductLists product={props.product.data} />
        </div>
            </AuthenticatedLayout>
        </>
    )
}