import Navbar from "@/Components/Navbar";

export default function Homepage(props) {
    console.log(props);
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center ">
                {props.product ? props.product.map((data, i) => {
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
        </>
    )
}