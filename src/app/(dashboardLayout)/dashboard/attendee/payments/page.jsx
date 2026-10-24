import DashboardHeading from '@/components/DashboardHeading';
import PaymentsTable from '@/components/PaymentsTable';
import { FetchMyPayments } from '@/lib/api/payments/data';
import getUser from '@/lib/api/session';
import React from 'react';

const AttendeePamentsPage = async () => {
    const user = await getUser();
  const payments = await FetchMyPayments(user?.email);
  console.log(payments);
    return (
        <div>
        <div>
            <DashboardHeading title={"Payments Overview"} description={"Show All Transaction Info"} />
            Attendee Payment Page
        </div>

        <PaymentsTable payments={payments} ></PaymentsTable>
        </div>
    );
};

export default AttendeePamentsPage;