import Navbar from "../components/Navbar";
import space from "../assets/space.jpeg"; // background image
import "../css/home.css";
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="video-container"></div>
            <Landing />
            <Initiatives />
            {/* <Funds /> */}
            <ContactForm />
            <Footer />
            <BackToTop />
        </>
    );
}
