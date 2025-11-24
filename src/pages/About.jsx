import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import BackToTop from "../components/BackToTop";

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="About Us"
                path="/about"
                name="About Us"
            />

            <section className="about-ngo" style={{ padding: "60px 20px" }}>
                <div
                    className="container"
                    style={{ maxWidth: "900px", margin: "0 auto" }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        About Sanjivini Foundation
                    </h2>

                    <p
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.6",
                            marginBottom: "15px",
                        }}
                    >
                        <strong>Sanjivini Foundation</strong> is a compassionate,
                        community-driven association dedicated to the{" "}
                        <strong>relief, education, and empowerment of street and
                            needy blind Indian females</strong>. Our work focuses on
                        uplifting those who are often overlooked—women who face
                        the dual challenges of poverty&nbsp;and disability.
                    </p>

                    <p
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.6",
                            marginBottom: "15px",
                        }}
                    >
                        Our vision is simple yet powerful:{" "}
                        <strong>to empower blind females with dignity, independence,
                            and hope.</strong> We believe that every woman, regardless of
                        her physical limitations or social background, deserves the
                        opportunity to learn, grow, and lead a life of respect and
                        self-worth.
                    </p>

                    <p
                        style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.6",
                            marginBottom: "15px",
                        }}
                    >
                        Through education, vocational training, shelter support,
                        health care, mobility assistance, and emotional counselling,
                        we aim to provide a strong foundation that helps them take
                        control of their future. Our programs are built on compassion,
                        inclusivity, and long-term community support.
                    </p>

                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                        Together, we can create a society where blind women are not
                        seen as dependents but as strong, skilled, and empowered
                        individuals. Your support helps us bring visibility,
                        opportunity, and dignity to those who need it most.
                    </p>
                </div>
            </section>

            <BackToTop />
        </>
    );
}
