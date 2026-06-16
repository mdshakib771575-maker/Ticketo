import Logo from '@/components/Logo';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='min-h-screen flex '>
            <aside className='w-64 border-r min-h-screen'>
              <div className='px-6 py-5'>
                <Logo></Logo>
              </div>
            </aside>
            <div>

            {children} 
            </div>
        </div>
    );
};

export default DashboardLayout;