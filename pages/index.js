import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import OurCustomer from "../components/home/OurCustomer";
import OurServices from "../components/home/OurServices";
import Performance from "../components/home/Performance";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Performance />
      <OurServices />
      <OurCustomer />
      <Footer />
    </>
  );
}
