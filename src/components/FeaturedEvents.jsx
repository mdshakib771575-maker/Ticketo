

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import EventCard from "./EventCard";
import { fetchFeaturedEvents } from "@/lib/api/events/data";



export default async function FeaturedEvents() {
  const events =  await fetchFeaturedEvents();
  return (
    <section className="py-15 max-w-7xl mx-auto px-6 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="text-center mx-auto pb-15">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Featured Events</h2>
          <p className="text-slate-400 text-sm mt-2">Explore the hottest and most popular events happening this week.</p>
        </div>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {events.slice(0,6).map((event) => (
          <div key={event._id}>
            <EventCard event={event} buttonText="Book Ticket" />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-10 mr-15 ">
           <Link href="/events" className="text-pink-500 border p-5 rounded-4xl hover:text-pink-400 font-semibold  flex items-center gap-2 transition-colors">
          View All Events <FaChevronRight size={12} />
        </Link>
      </div>
      
    </section>
  );
}
