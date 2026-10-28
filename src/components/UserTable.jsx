
"use client";

import { useState } from "react";
import {
    Card,
    Table,
    TableContent,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    Button,
} from "@heroui/react";



export default function AllUsersTable({allUser}) {
    

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }

        setUsers((prev) => prev.filter((user) => user._id !== id));
    };

    return (
        <Card className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-xl">
           
            <div className="overflow-x-auto">
                <Table aria-label="All users table">
                    <TableContent>
                        <TableHeader>
                            <TableColumn key="name" isRowHeader>
                                NAME
                            </TableColumn>

                            <TableColumn key="email">EMAIL</TableColumn>
                            <TableColumn key="role">ROLE</TableColumn>
                            <TableColumn key="action">ACTION</TableColumn>
                        </TableHeader>

                        <TableBody emptyContent="No users found.">
                            {allUser.map((user) => (
                                    <TableRow key={user._id}>
                                        <TableCell>
                                            <span className="font-semibold text-white">
                                                {user.name}
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span className="text-slate-400">
                                                {user.email}
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <Chip
                                                size="sm"
                                                variant="flat"
                                                color={
                                                    user.role === "organizer"
                                                        ? "secondary"
                                                        : "primary"
                                                }
                                                className="font-bold uppercase"
                                            >
                                                {user.role}
                                            </Chip>
                                        </TableCell>

                                        <TableCell>
                                            <Button
                                                size="sm"
                                                color="danger"
                                                variant="flat"
                                                className={"border text-red-500"}
                                            >
                                                Delete
                                            </Button>
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
