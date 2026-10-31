import DashboardHeading from '@/components/DashboardHeading';
import PendingEventsTable from '@/components/UpdatedPendingEventsTable';
import { FetchPnadingEvents } from '@/lib/api/admin/data';
import React from 'react';

const AdminApproveEvents = async () => {
     const pendingEvents = await FetchPnadingEvents();
    //  console.log("....",pandingEvents);

    return (
        <div>
            <DashboardHeading title="ApproveEvents" description="Dashboard Admin ApproveEvents"></DashboardHeading>

            <PendingEventsTable pendingEvents={pendingEvents} ></PendingEventsTable>

            
        </div>
    );
};

export default AdminApproveEvents;