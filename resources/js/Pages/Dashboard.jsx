import AddData from '@/Components/Dashboard/AddData';
import AddMachine from '@/Components/Dashboard/AddMachine';
import Select from '@/Components/Dashboard/Select';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard(props) {
    // const [no, setNo] = useState('');
    // const [name, setName] = useState('');
    // const [process, setProcess] = useState('');
    // const [est, setEst] = useState('');

    // const handleSubmit = () => {
    //     const data = {
    //         no, name, process, est
    //     };
    //     router.post('/product', data);
    //     setNo('')
    //     setName('')
    //     setProcess('')
    //     setEst('')
    // };



    // console.log(props);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="flex max-w-7xl gap-5 mx-auto sm:px-6 lg:px-8">
                    <AddData machine = {props.machine}/>
                    <AddMachine />
                </div>
            </div>
            <div>
                {/* <Select /> */}
            </div>
        </AuthenticatedLayout>
    );
}
