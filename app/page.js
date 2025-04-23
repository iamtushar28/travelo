import Companies from "@/components/Companies";
import Destinations from "@/components/Destinations";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import TravelPoints from "@/components/TravelPoints";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Destinations />
      <TravelPoints />
      <Features/>
      <Testimonial/>
      <Subscribe/>
    </>
  );
}
