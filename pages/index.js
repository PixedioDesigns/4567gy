import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import OurServices from "../components/home/OurServices";
import Performance from "../components/home/Performance";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Performance />
        <OurServices />
      </div>
    </>
  );
}
