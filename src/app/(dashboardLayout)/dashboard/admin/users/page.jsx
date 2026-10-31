import DashboardHeading from '@/components/DashboardHeading';
import AllUsersTable from '@/components/UserTable';
import { FetchAllUsers } from '@/lib/api/admin/data';
import React from 'react';

const AdminUserPage = async() => {

    const allUser = await FetchAllUsers();
    // console.log(allUser);
    return (
        <div>
              <DashboardHeading title="All Users" description="Shows All Users and Organizers"></DashboardHeading>
              <AllUsersTable allUser ={allUser}></AllUsersTable>
        </div>
    );
};

export default AdminUserPage;