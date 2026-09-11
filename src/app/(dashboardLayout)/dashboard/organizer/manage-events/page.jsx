"use client";

import DashboardHeading from "@/components/DashboardHeading";
import { EditEventModal } from "@/components/EditEventModal";
import { DeleteEvent } from "@/lib/api/events/action";

import { MyManageEvent } from "@/lib/api/events/data";
import { useSession } from "@/lib/auth-client";
import { AlertDialog, Button, Card, Chip, Table, } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageEvent = () => {
    const [events, setEvents] = useState([])
    const { data: session } = useSession();

    const handleDelete = async (id) => {
        const data = await DeleteEvent(id)
        console.log(data)
        console.log(DeleteEvent)


        if (data.deletedCount > 0) {
            setEvents((prev) => prev.filter((event) => event._id !== id));
        }
    };


    useEffect(() => {
        const loadEvent = async () => {
            const evetnData = await MyManageEvent(session?.user?.email)
            setEvents(evetnData)
        }

        loadEvent();

    }, [session]);

    return (
        <div>
            <DashboardHeading title={"Manage Event"} description={"Manage All Event"}></DashboardHeading>
            <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl p-6 rounded-2xl">
                <Table variant="secondary">
                    <Table.ScrollContainer>
                        <Table.Content
                            aria-label="Manage Events Table"
                        
                        >
                            <Table.Header>
                                <Table.Column isRowHeader>EVENT</Table.Column>
                                <Table.Column>CATEGORY</Table.Column>
                                <Table.Column>DATE</Table.Column>
                                <Table.Column>TICKET PRICE</Table.Column>
                                <Table.Column>AVAILABLE SEATS</Table.Column>
                                <Table.Column>STATUS</Table.Column>
                                <Table.Column>ACTIONS</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {events.map((event) => (
                                    <Table.Row key={event._id}>
                                        <Table.Cell>
                                            <span className="font-semibold text-white">
                                                {event.title}
                                            </span>
                                        </Table.Cell>

                                        <Table.Cell>{event.category}</Table.Cell>

                                        <Table.Cell>{event.date}</Table.Cell>

                                        <Table.Cell className="text-green-400 font-semibold">
                                            ${event.price}
                                        </Table.Cell>

                                        <Table.Cell>{event.capacity}</Table.Cell>

                                        <Table.Cell>
                                            <Chip
                                                color={
                                                    event.status === "Approved"
                                                        ? "success"
                                                        : event.status === "Rejected"
                                                            ? "danger"
                                                            : "warning"
                                                }
                                                size="sm"
                                                variant="flat"
                                            >
                                                {event.status}
                                            </Chip>
                                        </Table.Cell>

                                        <Table.Cell>
                                            <div className="flex items-center gap-2">
                                                {/* <Button
                                                    isIconOnly
                                                    size="sm"
                                                    className={"text-blue-600"}
                                                    color="primary"
                                                    variant="flat"
                                                    onPress={() => console.log("Edit:", event._id)}
                                                >
                                                    <FaEdit />
                                                </Button> */}


                                                <EditEventModal event={event}></EditEventModal>

                                                <AlertDialog>
                                                    <Button
                                                        isIconOnly
                                                        size="sm"
                                                        color="danger"
                                                        className={"text-red-500"}
                                                        variant="flat"
                                                    >
                                                        <FaTrash />
                                                    </Button>

                                                    <AlertDialog.Backdrop>
                                                        <AlertDialog.Container>
                                                            <AlertDialog.Dialog>
                                                                <AlertDialog.CloseTrigger />

                                                                <AlertDialog.Header>
                                                                    <AlertDialog.Icon status="danger" />
                                                                    <AlertDialog.Heading>
                                                                        Delete Book?
                                                                    </AlertDialog.Heading>
                                                                </AlertDialog.Header>

                                                                <AlertDialog.Body>
                                                                    <p>
                                                                        Are you sure you want to delete{" "}
                                                                        <strong></strong>?
                                                                    </p>
                                                                </AlertDialog.Body>

                                                                <AlertDialog.Footer>
                                                                    <Button slot="close" variant="outline">
                                                                        Cancel
                                                                    </Button>

                                                                    <Button
                                                                        slot="close"
                                                                        color="danger"
                                                                        variant="danger"
                                                                        onPress={() =>
                                                                            handleDelete(event._id)
                                                                        }
                                                                    >
                                                                        Delete
                                                                    </Button>
                                                                </AlertDialog.Footer>
                                                            </AlertDialog.Dialog>
                                                        </AlertDialog.Container>
                                                    </AlertDialog.Backdrop>
                                                </AlertDialog>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </Card>
        </div>
    );
};

export default ManageEvent;