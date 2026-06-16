import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import { ClientPageRoot } from "next/dist/client/components/client-page";

export default async function HomePage() {

  const stats={
    totalEvents:30,
    totalOrgs:40,
    totalAttendees:4000
  };
  return (
    <div>
     <Hero></Hero>
     <WhyChoose></WhyChoose>
     <Statistics stats={stats}></Statistics>
     <Testimonials></Testimonials>
    </div>
  );
}

