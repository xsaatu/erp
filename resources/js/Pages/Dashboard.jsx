import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth }, props) {
    const [so, setSo] = useState('');
    const [name, setName] = useState('');
    const [process, setProcess] = useState('');
    const [est, setEst] = useState('');

    const handleSubmit = () => {
        const data = {
            so, name, process, est
        };
        router.post('/product', data);
        setSo('')
        setName('')
        setProcess('')
        setEst('')
    };

    console.log('props last : ', props);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-grey-200">
                        <input type="text" placeholder="SO" className="m-3 input w-full" onChange={(so) => setSo(so.target.value)} value={so} />
                        <input type="text" placeholder="Nama" className="m-3 input w-full" onChange={(name) => setName(name.target.value)} value={name} />
                        <input type="text" placeholder="Process" className="m-3 input w-full" onChange={(process) => setProcess(process.target.value)} value={process} />
                        <input type="text" placeholder="Estimasi" className="m-3 input w-full" onChange={(est) => setEst(est.target.value)} value={est} />
                        <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
            <div>
                {props.myNews}
            </div>
        </AuthenticatedLayout>
    );
}
