import OrganizerSidebar from "@/components/OrganizerSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex '>
       <OrganizerSidebar></OrganizerSidebar>
      <div className="px-5 py-10 max-w-5xl w-full">

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;