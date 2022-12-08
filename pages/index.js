import Hero from "../components/home/Hero";
import OurCustomer from "../components/home/OurCustomer";
import OurServices from "../components/home/OurServices";
import Performance from "../components/home/Performance";

export default function Home() {
    return (
        <>
            <div>
                <Hero />
                <Performance />
                <OurServices />
                <OurCustomer />
            </div>
        </>
    );
}
