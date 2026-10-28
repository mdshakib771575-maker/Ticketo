import { roleValidator } from '@/lib/api/session';
import React from 'react';

const AttendedLayout = async ({children}) => {

    await roleValidator("attendee")
    return children
};

export default AttendedLayout;