"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { Card } from '@heroui/react';
import React from 'react';
import { FaCalendarAlt, FaDollarSign, FaTicketAlt } from 'react-icons/fa';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


const data = [
    { month: "Jan", amount: 12 },
    { month: "Feb", amount: 45 },
    { month: "Mar", amount: 23 },
    { month: "Apr", amount: 78 },
    { month: "May", amount: 100 },
    { month: "Jun", amount: 20 },
    { month: "Jul", amount: 80 },
    { month: "AUG", amount: 40 },
    { month: "Sep", amount: 70 },
    { month: "Oct", amount: 30 },
    { month: "Nov", amount: 20 },
    { month: "Dec", amount: 25 },

];

const AdminOverView = () => {
    const stats = {
        totalEvents: 15,
        totalAttendees: 50,
        totalRevenue: 250,
        totalSoldTickets: 780,
    };



    return (
        <div>
            <DashboardHeading title="Overview" description="Admin Dashboard Overview"></DashboardHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <Card className="glass border-white/5" radius="lg">
                    <div className="p-6 flex flex-row items-center justify-between">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Hosted Events</span>
                            <h2 className="text-3xl font-extrabold text-white">{stats.totalEvents}</h2>
                        </div>
                        <div className="p-3.5 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20"><FaCalendarAlt size={24} /></div>
                    </div>
                </Card>
                <Card className="glass border-white/5" radius="lg">
                    <div className="p-6 flex flex-row items-center justify-between">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Ticket Sales</span>
                            <h2 className="text-3xl font-extrabold text-white">{stats.totalAttendees}</h2>
                        </div>
                        <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><FaTicketAlt size={24} /></div>
                    </div>
                </Card>
                <Card className="glass border-white/5" radius="lg">
                    <div className="p-6 flex flex-row items-center justify-between">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Accumulated Revenue</span>
                            <h2 className="text-3xl font-extrabold text-white">{`$${stats.totalRevenue.toFixed(2)}`}</h2>
                        </div>
                        <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
                    </div>
                </Card>
            </div>

            <div className="w-full rounded-lg bg-slate-900 p-4 mt-10">
                <h2 className="mb-4 text-lg font-semibold text-white">
                    Total Hosted Event Sales
                </h2>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid
                                stroke="#334155"
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="month"
                                stroke="#94a3b8"
                                tickLine={false}
                                axisLine={false}
                            />

                            <YAxis
                                stroke="#94a3b8"
                                tickLine={false}
                                axisLine={false}
                            />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1e293b",
                                    border: "1px solid #334155",
                                    borderRadius: "8px",
                                    color: "#f8fafc",
                                }}
                                labelStyle={{ color: "#f8fafc" }}
                                itemStyle={{ color: "#60a5fa" }}
                            />

                            <Line
                                type="monotone"
                                dataKey="amount"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                dot={{
                                    r: 4,
                                    fill: "#3b82f6",
                                    strokeWidth: 0,
                                }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminOverView;