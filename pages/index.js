import Footer from "../components/home/Footer";
import GotBiggerGols from "../components/home/GotBiggerGols";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import OurCustomer from "../components/home/OurCustomer";
import OurServices from "../components/home/OurServices";
import Performance from "../components/home/Performance";
import SimplePricing from "../components/home/SimplePricing";
import StepBuyStep from "../components/home/StepBuyStep";
import OurWork from "../components/home/OurWork";
import YouCoverd from "../components/home/YouCoverd";
import BackToTop from "../components/home/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Performance />
      <OurServices />
      <OurWork />
      <OurCustomer />
      <StepBuyStep />
      <SimplePricing />
      <GotBiggerGols />
      <YouCoverd />
      <Footer />
      <BackToTop />
    </>
  );
}
