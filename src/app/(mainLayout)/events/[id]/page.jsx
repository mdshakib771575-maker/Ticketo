import { GetDetailEvent } from "@/lib/api/events/data";
import EventDetailsClient from "../EventDetailsClient";

export default async function EventDetailsPage({ params }) {
    
    const { id } = await params;
    const event = await GetDetailEvent(id);

    return (
      <EventDetailsClient event={event}></EventDetailsClient>
    );
}