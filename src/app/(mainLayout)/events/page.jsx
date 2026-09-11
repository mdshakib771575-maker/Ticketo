
import { getEvents } from "@/lib/api/events/data";
import BrowseEventsClientPage from "./BrowseEventsClient";


export default async function BrowseEventsPage({ searchParams }) {
    const sParams = await searchParams;

    const search = sParams.search || "";
    const category = sParams.category || "";
    const location = sParams.location || "";

    console.log(search,category,location)
    
    const params = new URLSearchParams();

  if (search) {
    params.set("search", search);
  }
  if (category) {
    params.set("category", category);
  }
  if (location) {
    params.set("location", location);
  }
 

    const events = await getEvents(params);

    return <BrowseEventsClientPage events={events} />;
}