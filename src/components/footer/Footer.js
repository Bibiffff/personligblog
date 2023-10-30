import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare, AiFillInstagram, AiFillLinkedin, AiFillHome, AiFillPhone, AiFillMail } from "react-icons/ai";

const Footer = () => {


    return (
        <footer className="text-center text-lg-start bg-white text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <div className="fas fa-gem me-3 text-secondary"></div>
                                Blogbi
                            </h6>
                            <p>
                                Quisque porta, ipsum quis pretium posuere, libero nisl sodales libero,a cursus sem elit quis arcu.
                                Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                            Useful links to Home page c:
                            </h6>
                            <p>
                                <Link to="/" className="text-reset">Home</Link>
                            </p>
                            <p>
                                <Link to="/" className="text-reset">Home</Link>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                More Useful links to Home page c:
                            </h6>
                            <p>
                                <Link to="/" className="text-reset">Home</Link>
                            </p>
                            <p>
                                <Link to="/" className="text-reset">Home</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><AiFillHome /> blog halløj, Space, Unknown</p>
                            <p>
                                <AiFillMail />
                                bibi@bibi.bibi
                            </p>
                            <p><AiFillPhone /> + 01 23 45 67</p>
                            <p><AiFillPhone /> + 01 89 587 89</p>
                            <div>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillFacebook />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillTwitterSquare />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillGoogleSquare />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillInstagram />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillLinkedin />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="text-center p-4">
                © 2023 Copyright:
                <Link className="text-reset fw-bold" to="/" >Blog.SpaceOfHej.com</Link>
            </div>
        </footer>
    )
}

export default Footer;