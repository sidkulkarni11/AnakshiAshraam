import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import BackToTop from "../components/BackToTop";

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader title="About Us" path="/about" name="About Us" />

            <section className="about-ngo" style={{ padding: "60px 20px" }}>
                <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>
                        About Andakshi Aashram
                    </h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        <strong>Andakshi Aashram</strong> is a non-profit organization
                        committed to uplifting underprivileged communities through education,
                        skill development, healthcare, and social welfare initiatives.
                    </p>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
                        Our mission is to empower women, children, and rural families by
                        creating opportunities for growth and development. We believe in
                        sustainable change driven by compassion, education, and community
                        participation.
                    </p>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                        Through our various programs, we strive to build confidence, provide
                        resources, and create a brighter future for those who need it most.
                        Together, we can transform lives and spread hope.
                    </p>
                </div>
            </section>

            <BackToTop />
        </>
    );
}
