import '../css/footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>

                            <a
                                href="https://www.google.com/maps/dir//Ahead+of,+ANHERI+RECREATION+CLUB,+37,+Gilbert+Hill+Road,+Near,+Bhavans+College+Rd,+Andheri+(W,+Mumbai,+Maharashtra+400058"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>
                                    <i className="fa fa-map-marker-alt"></i>
                                    2nd Floor, Andhakshi Ashram <br />
                                    Near Bhavans College Road <br />
                                    Behind Recreation Club<br />
                                    Andheri (West), Mumbai – 400058
                                </p>
                            </a>

                            <a href="tel:+918879152067">
                                <p><i className="fa fa-phone"></i> +91 8879152067</p>
                            </a>
                            <a href="tel:+918879895919">
                                <p><i className="fa fa-phone"></i> +91 8879895919</p>
                            </a>

                            {/* ✅ Updated Email */}
                            <a href="mailto:info@andhakshiashram.org">
                                <p>
                                    <i className="fa fa-envelope"></i>
                                    info@andhakshiashram.org
                                </p>
                            </a>

                            <div className="footer-social">
                                {/* Future social media links */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            &copy; <a href="#">Andhakshi Ashram</a> | 2024, All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Designed By <a href="https://sidkulkarni.com/">sidkulkarni.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
