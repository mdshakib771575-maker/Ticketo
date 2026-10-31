import AdminPaymentsTable from '@/components/AdminPaymentsTable';
import DashboardHeading from '@/components/DashboardHeading';
import { FetchAllPayments } from '@/lib/api/admin/data';
import React from 'react';

const Transactions = async() => {

    const payments = await FetchAllPayments();
    console.log("fhasdfhkasd",payments);

    return (
        <div>
             <DashboardHeading title="Transactions" description="All Payment Overview"></DashboardHeading>
             <AdminPaymentsTable payments={payments}></AdminPaymentsTable>
        </div>
    );
};

export default Transactions;