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
                                href="https://www.google.com/maps/dir//Ahead+of,+ANHERI+RECREATION+CLUB,+37,+Gilbert+Hill+Road,+Near,+Bhavans+College+Rd,+Andheri+(W,+Mumbai,+Maharashtra+400058/@19.1233433,72.7562507,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7c9d9c4056c8f:0xf2f3315296470c32!2m2!1d72.8386524!2d19.1233616?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>
                                    <i className="fa fa-map-marker-alt"></i>
                                    Ahead of Andheri Recreation Club, 37 Gilbert Hill Road,<br />
                                    Near Bhavans College Road, Andheri (W), Mumbai – 400058
                                </p>
                            </a>
                            <a href="tel:+918879152067">
                                <p><i className="fa fa-phone"></i>+91 8879152067</p>
                            </a>
                            <a href="tel:+918879895919">
                                <p><i className="fa fa-phone"></i>+91 8879895919</p>
                            </a>
                            <a href="mailto:andakshiashram7@gmail.com">
                                <p><i className="fa fa-envelope"></i>andakshiashram7@gmail.com</p>
                            </a>
                            <div className="footer-social">
                                {/* Future social media links can be added here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            &copy; <a href="#">Andakshi Ashram</a> | 2024, All Rights Reserved.
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
