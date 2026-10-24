import AttendeeBookingTable from "@/components/AttendeeBookingTable";
import DashboardHeading from "@/components/DashboardHeading";
import { FetchMyBookings } from "@/lib/api/bookings/data";
import getUser from "@/lib/api/session";

const AttendeeTicketsPage = async () => {

// ডাইনামিক ডেটা বা API Response এর স্যাম্পল
// const tickets = [
//     {
//         id: "1",
//         name: "Nazmus Sakib",
//         email: "sakib@gmail.com",
//         ticketName: "Global Tech Summit 2026",
//         quantity: "2 tickets",
//         date: "6/3/2026",
//     },
//     {
//         id: "2",
//         name: "Ahmmed Ali",
//         email: "ali@gmail.com",
//         ticketName: "UI/UX Design Workshop",
//         quantity: "1 ticket",
//         date: "10/3/2026",
//     },
// ];
  
const user = await getUser();
const bookings = await FetchMyBookings(user?.email)

console.log(bookings);



    return (
        <div className="mt-6">
            <DashboardHeading title={"Attendee All Tickets"} description={"Show  All Event Info"} />

            <AttendeeBookingTable tickets={bookings}></AttendeeBookingTable>
            
        </div>
    );
};

export default AttendeeTicketsPage;