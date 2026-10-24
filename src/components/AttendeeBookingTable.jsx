"use client";
import { Card, Table } from '@heroui/react';
import React from 'react';


const AttendeeBookingTable = ({tickets}) => {

    

    return (
        <div className="mt-6">
            <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl p-6 rounded-2xl overflow-hidden">
                <div className="w-full overflow-x-auto">
                    <Table className="w-full min-w-full">
                        <Table.ScrollContainer className="max-w-full overflow-x-auto">
                            <Table.Content aria-label="Event Bookings Table" className="min-w-[800px] w-full">
                                <Table.Header className="bg-slate-950/40 border-b border-white/5">
                                    <Table.Column
                                        isRowHeader
                                        className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20 whitespace-nowrap"
                                    >
                                        EVENT NAME
                                    </Table.Column>
                                    <Table.Column className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20 whitespace-nowrap">
                                       Booking Date
                                    </Table.Column>
                                    <Table.Column className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20 whitespace-nowrap">
                                       quantity
                                    </Table.Column>
                                    <Table.Column className="py-4 px-6 text-slate-300 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20 whitespace-nowrap">
                                        PaymentStatus
                                    </Table.Column>
                                    <Table.Column className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20 whitespace-nowrap">
                                        BOOKING DATE
                                    </Table.Column>
                                </Table.Header>

                                <Table.Body
                                    emptyContent={
                                        <p className="text-slate-500 py-10 text-center font-medium">
                                            No ticket purchases logged for your events.
                                        </p>
                                    }
                                >
                                    {tickets.map((item) => (
                                        <Table.Row
                                            key={item._id}
                                            className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150 last:border-b-0"
                                        >
                                            <Table.Cell className="py-4 px-6 align-middle font-bold text-white whitespace-nowrap">
                                                {item.eventTitle}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 px-6 align-middle text-slate-300 font-medium whitespace-nowrap">
                                                 {item.bookingDate?.split("T")[0]}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 px-6 align-middle text-slate-300 font-semibold whitespace-nowrap">
                                                {item.quantity}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 px-6 align-middle text-green-500 font-semibold whitespace-nowrap">
                                                {item.paymentStatus}
                                            </Table.Cell>
                                            <Table.Cell className="py-4 px-6 align-middle text-green-500 font-medium whitespace-nowrap">
                                                ${item.amount}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </div>
            </Card>
        </div>
    );
};

export default AttendeeBookingTable;