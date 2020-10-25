import React from 'react'
import AOS from 'aos';
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    React.useEffect(() => {
		if(window){
			AOS.init({
                duration: 1200,
                delay: 300,
			})
		}
	}, [])
    return(
        <div>
            <div className="footer-container py-5 px-3 px-md-0">
                <div className="row no-gutters container mx-auto">
                    <div className="col-12 col-md-3 p-2 p-md-4" data-aos="fade-up">
                        <h2 className="m-0 mt-bold text-pink">Heads Up</h2>
                    </div>
                    <div className="col-12 col-md-6 p-2 p-md-4" data-aos="fade-up">
                        <div>
                            <h4>About Us</h4>
                            <p className="mt-thin">
                                An initiative by a group of students of IIT (BHU) Varanasi, to raise voice 
                                for the mental wellness of youngsters, perhaps everyone's. We aim to provide 
                                a pedestal to discuss the not-so openly talked topic in our society (i.e. 
                                mental health issues). Being connected with Mental Health Professionals 
                                and Psychologists we are enlightened to provide any support within our scope.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 p-2 p-md-4" data-aos="fade-up">
                        <div>
                            <h4>Contact Us</h4>
                            <div>
                                <p className="mt-thin">Reach out to us directly!</p>
                                <div className="d-flex align-items-center">
                                    <a href="https://www.instagram.com/ishi_says/">
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