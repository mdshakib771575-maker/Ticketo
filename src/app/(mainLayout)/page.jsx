import FeaturedEvents from "@/components/FeaturedEvents";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import TopOrganizers from "@/components/TopOrganizers";
import WhyChoose from "@/components/WhyChoose";


export default async function HomePage() {

  const stats={
    totalEvents:30,
    totalOrgs:40,
    totalAttendees:4000
  };
  return (
    <div>
     <Hero></Hero>
     <FeaturedEvents></FeaturedEvents>
     <WhyChoose></WhyChoose>
     <Statistics stats={stats}></Statistics>
      <TopOrganizers />
     <Testimonials></Testimonials>
    </div>
  );
}

