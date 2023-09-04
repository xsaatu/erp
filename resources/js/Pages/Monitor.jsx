import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Monitor( {auth}, props) {
    console.log(props);
    return (
        <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Monitor</h2>}
        >
            <div className="flex flex-col justify-center items-center ">
                {props.myProduct ? props.myProduct.map((data, i) => {
                    return (
                        <div key={i}>
                            <p>{data.so}</p>
                            <p>{data.name}</p>
                            <p>{data.process}</p>
                            <p>{data.est}</p>
                        </div>
                    )
                }) : ''};
            </div>
            </AuthenticatedLayout>
        </>
    )
}