const Select = (machine) => {
    // const mesin = props.machine;
    return machine.map((data, i) => {
        return <select className="select w-full max-w-xs">
            <option disabled selected>Pick your favorite Simpson</option>
            <option key={i}>{data.nama}</option>
        </select>
    })
}

export default Select;

// const Pilih = (machine) => {
//     return <select className="select w-full max-w-xs">

//         machine.map()
//     </select>
// }