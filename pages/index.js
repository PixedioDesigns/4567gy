import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import OurCustomer from "../components/home/OurCustomer";
import OurServices from "../components/home/OurServices";
import Performance from "../components/home/Performance";

export default function Home() {
  return (
    <>
      <Hero />
      <Performance />
      <OurServices />
      <OurCustomer />
      <Footer />
    </>
  );
}
