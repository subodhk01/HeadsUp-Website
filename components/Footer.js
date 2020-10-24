import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return(
        <div>
            <div className="footer-container py-5 px-3 px-md-0">
                <div className="row no-gutters container mx-auto">
                    <div className="col-12 col-md-4 p-2 p-md-4">
                        <h2 className="m-0 mt-bold text-pink">Heads Up</h2>
                    </div>
                    <div className="col-12 col-md-4 p-2 p-md-4">
                        <div>
                            <h4>About Us</h4>
                            <p className="mt-thin">
                                We at HeadsUp!, aim to build mental wellness platform for teens and college 
                                folks with motto of awareness prior to treatment. We intent to provide 
                                psychological help to the people in their relationship, career and connect 
                                with the  experts in the field.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-2 p-md-4">
                        <div>
                            <h4>Contact Us</h4>
                            <div>
                                <p className="mt-thin">Reach out to us directly!</p>
                                <div className="d-flex align-items-center">
                                    <a href="">
                                        <div className="icon-box">
                                            <FaInstagram color="#061242" size="24" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer-container {
                    background: white;
                    color: #061242;
                }
            `}</style>
        </div>
    )
}