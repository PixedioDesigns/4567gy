import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home/Hero";
import OurServices from "../components/home/OurServices";
import Performance from "../components/home/Performance";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <div>
                <Hero />
                <Performance />
                <OurServices />
            </div>
        </>
    );
}
