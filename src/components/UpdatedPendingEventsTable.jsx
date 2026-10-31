
// "use client";

// import {
//     Card,
//     Table,
//     TableContent,
//     TableHeader,
//     TableColumn,
//     TableBody,
//     TableRow,
//     TableCell,
//     Chip,
//     Button,
// } from "@heroui/react";

// import { useState } from "react";
// import {
//     ApproveEvent,
//     RejectEvent,
// } from "@/lib/api/admin/action";

// export default function PendingEventsTable({ pendingEvents }) {
//     const [events, setEvents] = useState(pendingEvents);
//     const [loadingId, setLoadingId] = useState(null);

//     // Approve Event
//     const handleApprove = async (id) => {
//         try {
//             setLoadingId(id);

//             const result = await ApproveEvent(id);

//             if (!result.success) {
//                 throw new Error(result.message);
//             }

//             setEvents((prev) =>
//                 prev.map((event) =>
//                     event._id === id
//                         ? { ...event, status: "approved" }
//                         : event
//                 )
//             );

//         } catch (error) {
//             alert(error.message || "Approval failed");
//         } finally {
//             setLoadingId(null);
//         }
//     };

//     // Reject Event
//     // const handleReject = async (id) => {
//     //     const confirmReject = window.confirm(
//     //         "Are you sure you want to reject this event?"
//     //     );

//     //     if (!confirmReject) return;

//     //     try {
//     //         setLoadingId(id);

//     //         const result = await RejectEvent(id);

//     //         if (!result.success) {
//     //             throw new Error(result.message);
//     //         }

//     //         setEvents((prev) =>
//     //             prev.filter((event) => event._id !== id)
//     //         );

//     //     } catch (error) {
//     //         alert(error.message || "Reject failed");
//     //     } finally {
//     //         setLoadingId(null);
//     //     }
//     // };

//     return (
//         <Card className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-xl">

//             <div className="overflow-x-auto">
//                 <Table aria-label="Pending events table">

//                     <TableContent>
//                         <TableHeader>
//                             <TableColumn key="title" isRowHeader>
//                                 EVENT TITLE
//                             </TableColumn>

//                             <TableColumn key="category">
//                                 CATEGORY
//                             </TableColumn>

//                             <TableColumn key="organizer">
//                                 ORGANIZER NAME
//                             </TableColumn>

//                             <TableColumn key="date">
//                                 EVENT DATE
//                             </TableColumn>

//                             <TableColumn key="action">
//                                 ACTION
//                             </TableColumn>
//                         </TableHeader>

//                         <TableBody emptyContent="No pending events found.">

//                             {events.map((event) => (
//                                 <TableRow key={event._id}>

//                                     <TableCell>
//                                         <span className="font-semibold text-white">
//                                             {event.title}
//                                         </span>
//                                     </TableCell>

//                                     <TableCell>
//                                         <span className="text-slate-400">
//                                             {event.category}
//                                         </span>
//                                     </TableCell>

//                                     <TableCell>
//                                         <span className="text-slate-400">
//                                             {event.organizerName || event.organizerEmail}
//                                         </span>
//                                     </TableCell>

//                                     <TableCell>
//                                         <span className="text-slate-400">
//                                             {event.date}
//                                         </span>
//                                     </TableCell>

//                                     <TableCell>
//                                         <div className="flex items-center gap-2">

//                                             <Button
//                                                 size="sm"
//                                                 color="success"
//                                                 variant="flat"
//                                                 isDisabled={
//                                                     event.status === "approved" ||
//                                                     loadingId === event._id
//                                                 }
//                                                 onPress={() => handleApprove(event._id)}
//                                             >
//                                                 {loadingId === event._id
//                                                     ? "Processing..."
//                                                     : event.status === "approved"
//                                                         ? "Approved"
//                                                         : "Approve"}
//                                             </Button>

//                                             {event.status === "pending" && (
//                                                 <Button
//                                                     size="sm"
//                                                     color="danger"
//                                                     variant="flat"
//                                                     isDisabled={loadingId === event._id}
//                                                     // onPress={() => handleReject(event._id)}
//                                                 >
//                                                     Reject
//                                                 </Button>
//                                             )}

//                                         </div>
//                                     </TableCell>

//                                 </TableRow>
//                             ))}

//                         </TableBody>
//                     </TableContent>
//                 </Table>
//             </div>
//         </Card>
//     );
// }
