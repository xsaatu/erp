

export default function Capacity(props) {
    const machines = props.machine;
    const total = props.total;

    console.log(total);

    return<div>
            <table className="table table-zebra">
            <thead>
            <tr>
                <th>nama</th>
                <th>kapasitas</th>
            </tr>
            </thead>
            <tbody>
            {machines.map((data, i) => {
            return <tr key={i}>
                    <td>{data.nama}</td>
                    <td>{total[data.nama]}</td>
                    
                </tr>
            })};

            </tbody>
        </table>
    </div>
}