import { useEffect, useState } from "react";
import BackToTop from "../components/common/BackToTop";
import Footer from "../components/common/Footer";
import GotBiggerGols from "../components/home/GotBiggerGols";
import Hero from "../components/home/Hero";
import Navbar from "../components/common/Navbar";
import OurCustomer from "../components/home/OurCustomer";
import OurServices from "../components/home/OurServices";
import OurWork from "../components/home/OurWork";
import Performance from "../components/home/Performance";
import Seo from "../components/common/Seo";
import Sidebar from "../components/common/Sidebar";
import SimplePricing from "../components/home/SimplePricing";
import StepBuyStep from "../components/home/StepBuyStep";
import YouCoverd from "../components/home/YouCoverd";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidebarOpen]);

  return (
    <>
      <Seo />
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
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
