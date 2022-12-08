import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import OurCustomer from "../components/home/OurCustomer";
import OurServices from "../components/home/OurServices";
import Performance from "../components/home/Performance";
import SimplePricing from "../components/home/SimplePricing";
import StepProcess from "../components/home/StepProcess";

export default function Home() {
    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <Performance />
                <OurServices />
                <OurCustomer />
                <StepProcess />
                <SimplePricing />
                <Footer />
            </div>
        </>
    );
}
