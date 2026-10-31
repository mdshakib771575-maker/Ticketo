
"use client";

import {
    Card,
    Table,
    TableContent,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import {
    AdminApproveEvent,
    ApproveEvent,
   
} from "@/lib/api/admin/action";
import { AdminRejcetEventAlertgPage } from "./AdminEventRejectAlert";

export default function PendingEventsTable({ pendingEvents }) {
    
    // const [events, setEvents] = useState(pendingEvents);
    const [loadingId, setLoadingId] = useState(null);
    const router = useRouter();

    // Approve Event
 const handleApprove = async (id) => {
    try {
        setLoadingId(id);

        const result = await AdminApproveEvent(id);

        if (!result.success) {
            throw new Error(result.message);
        }

        router.refresh();

    } catch (error) {
        alert(error.message || "Approval failed");
        setLoadingId(null);
    }
};


    return (
        <Card className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-xl">

            <div className="overflow-x-auto">
                <Table aria-label="Pending events table">

                    <TableContent>
                        <TableHeader>
                            <TableColumn key="title" isRowHeader>
                                EVENT TITLE
                            </TableColumn>

                            <TableColumn key="category">
                                CATEGORY
                            </TableColumn>

                            <TableColumn key="organizer">
                                ORGANIZER NAME
                            </TableColumn>

                            <TableColumn key="date">
                                EVENT DATE
                            </TableColumn>

                            <TableColumn key="action">
                                ACTION
                            </TableColumn>
                        </TableHeader>

                        <TableBody emptyContent="No pending events found.">

                            {pendingEvents.map((event) => (
                                <TableRow key={event._id}>

                                    <TableCell>
                                        <span className="font-semibold text-white">
                                            {event.title}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-slate-400">
                                            {event.category}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-slate-400">
                                            {event.organizerName || event.organizerEmail}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-slate-400">
                                            {event.date}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex items-center gap-2">

                                            <Button
                                            className={"bg-green-500 text-white border"}
                                                size="sm"
                                                color="success"
                                                variant="flat"
                                                isDisabled={
                                                    event.status === "approved" ||
                                                    loadingId === event._id
                                                }
                                                onPress={() => handleApprove(event._id)}
                                            >
                                                {loadingId === event._id
                                                    ? "Processing..."
                                                    : event.status === "approved"
                                                        ? "Approved"
                                                        : "Approve"}
                                            </Button>

                                            {event.status === "pending" && (
                                               <AdminRejcetEventAlertgPage event={event}></AdminRejcetEventAlertgPage>
                                            )}

                                        </div>
                                    </TableCell>

                                </TableRow>
                            ))}

                        </TableBody>
                    </TableContent>
                </Table>
            </div>
        </Card>
    );
}
