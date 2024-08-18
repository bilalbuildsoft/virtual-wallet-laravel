import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Balance from './components/Balance';
import Spend from './components/Spend';
import Deposit from './components/Deposit';
import Transactions from './components/Transactions';


export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div>
                    <h1>Financial Dashboard</h1>
                    <Balance />
                    <Deposit />
                    <Spend />
                    <Transactions />
                  </div>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
