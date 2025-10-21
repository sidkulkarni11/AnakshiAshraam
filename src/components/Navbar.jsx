import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
    const [auth, setAuth] = useState("");
    const path = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem("ADMIN_NGO");
        const isUser = localStorage.getItem("NGO");
        if (isAdmin) setAuth("ADMIN");
        else if (isUser) setAuth("USER");

        window.scrollTo({ top: 0, behavior: "smooth" });

        const topBar = document.querySelector(".top-bar");
        const navbar = document.querySelector(".navbar");

        function toggleStickyNavbar() {
            if (window.scrollY > topBar.offsetHeight) {
                navbar.classList.add("nav-sticky");
                topBar.classList.add("hide-top-bar");
            } else {
                navbar.classList.remove("nav-sticky");
                topBar.classList.remove("hide-top-bar");
            }
        }
        window.addEventListener("scroll", toggleStickyNavbar);
    }, []);

    return (
        <>
            {/* Top Bar Start */}
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <Link to="/admin">
                                        <i
                                            title="ADMIN"
                                            className="fa fa-solid fa-user-tie m-0"
                                            style={{ fontSize: "21px" }}
                                        />
                                    </Link>
                                </div>
                                <div className="text">
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:+91-7385223242">
                                        <p>+91-7385223242</p>
                                    </a>
                                </div>
                                <div className="text">
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:sanjivani.vitswd@vit.edu">
                                        <p>sanjivani.vitswd@vit.edu</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nav Bar Start */}
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Andakshi Aashram
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link
                                to="/"
                                className={`nav-item nav-link ${path === "/" ? "active" : ""}`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className={`nav-item nav-link ${
                                    path === "/about" ? "active" : ""
                                }`}
                            >
                                About
                            </Link>
                            <Link
                                to="/event"
                                className={`nav-item nav-link ${
                                    path === "/event" ? "active" : ""
                                }`}
                            >
                                Events
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nav Bar End */}
        </>
    );
}
