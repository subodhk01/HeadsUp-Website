import Head from 'next/head'
import SingleArrowButton from '../components/Buttons/SingleArrowButton'
import Timeline from '../components/Timeline/Timeline'

export default function Home() {
	return(
		<div>
			<div className="">
				<div className="hero-container top-section position-relative">
					<div className="container">
						<div className="d-flex align-items-center justify-content-between">
							<div>
								<h2 className="m-0 mt-thin">Heads Up</h2>
							</div>
							<div>
								<div className="d-flex align-items-center">
									<div>
										<div className="menu-item">
											Home
											<div className="menu-item-underline"></div>
										</div>
									</div>
									<div>
										<div className="menu-item">
											Preview
											<div className="menu-item-underline"></div>
										</div>
									</div>
									<div>
										<div className="menu-item">
											Contact
											<div className="menu-item-underline"></div>
										</div>
									</div>
									<div>
										<div className="menu-item">
											About
											<div className="menu-item-underline"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row no-gutters align-items-center top-section-content container mx-auto">
						<div className="col-12 col-md-6">
							<div className="d-flex align-items-center justify-content-center">
								<div>
									<h1 className="mt-bold font-3">Heads Up!</h1>
									<h4 style={{color: "rgb(11 22 51 / 61%)"}}>
										Building the mental wellness community India needs!
									</h4>
									<h6>
										We at HeadsUp, aim to build mental wellness platform for teens and 
										college folks with motto of awareness prior to treatment. We intent 
										to provide psychological help to the people in their relationship, 
										career and connect with the  experts in the field.
									</h6>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="d-flex align-items-center justify-content-center">
								<div>
									<img />
								</div>
								<div className="d-flex justify-content-center">
									<SingleArrowButton solid>
										Get the App
									</SingleArrowButton>
									<div className="btn btn-hollow mx-2">
										Take a preview
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="custom-shape-divider-bottom-1603289794">
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
						</svg>
					</div>
				</div>
			</div>
			<div className="py-5 bg-white">
				<div className="py-5 container">
					<h2 className="mt-bold">
						Timeline
					</h2>
				</div>
				<div className="mb-5">
					<Timeline />
				</div>
			</div>
			<div>
				<div className="text-center mb-5">
					<h1 className="mt-bold pb-5">My Wall</h1>
				</div>
				<div className="wall-container py-5 position-relative">
					<div className="quote-container w-100 font-11 mt-light">
						<div className="quote-box position-absolute p-3 p-md-5 d-flex align-items-center justify-content-center">
							“Just because you don't understand it doesn't mean it isn't so.” – Lemony Snicket
						</div>
					</div>
					<div className="py-1 py-md-3">
						<form className="pt-5 m-2">
							<div className="row no-gutters">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<input className="form-control" placeholder="Your Instagram handle" />
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Your Email" />
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<textarea className="form-control" rows="5" placeholder="Your Message" />
									</div>
									<div className="text-center">
										<button className="btn btn-solid" type="submit">Share your Message</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<style jsx>{`
				.wall-container {
					min-height: 70vh;
					background-image: url("/bg.png");
					background-color: rgba(0,0,0,0.1);
					background-size: cover;
					background-position: center;
				}
				.quote-box {
					background: white;
					max-width: 800px;
					margin: 0px auto;
					left: 0px;
					right: 0px;
					border-radius: 10px;
					box-shadow: 0px 0px 10px 2px #20253c2e;
					min-height: 100px;
					top: -50px;
				}
				.form-control {
					max-width: 400px;
					margin: 0px auto;
					border: none;
					border-bottom: 1px solid white;
					color: white;
					background: transparent;
					border-radius: 0px;
					transition: 0.3s;
					font-size: 1.2rem;
					font-family: madetommy-bold;
				}
				.form-control:focus {
					border: none;
					outline: none;
					box-shadow: none;
					border-bottom: 3px solid white;
				}
				input::-webkit-input-placeholder {color: #061242;}
				input::-moz-placeholder { color: #061242;}
				input:-ms-input-placeholder { color: #061242;}
				input:-moz-placeholder {color: #061242;}
				textarea::-webkit-input-placeholder {color: #061242;}
				textarea::-moz-placeholder { color: #061242;}
				textarea:-ms-input-placeholder { color: #061242;}
				textarea:-moz-placeholder {color: #061242;} 
				.top-section {
					background: linear-gradient(to bottom,white,#2998ca);
				}
				.top-section-content {
					min-height: calc(100vh - 94px - 76px);
				}
				.menu-item {
					padding: 34px 20px;
					cursor: pointer;
					font-family: madetommy-light;
					font-size: 1.1rem;
					position: relative;
				}
				.menu-item-underline {
					position: absolute;
					bottom: 24px;
					left: 20px;
					height: 3px;
					width: 0px;
					background: #174282;
					transition: 0.2s;
				}
				.menu-item:hover {
					color: #174282;
				}
				.menu-item:hover > .menu-item-underline {
					width: 36px;
				}
				.custom-shape-divider-bottom-1603289794 {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					overflow: hidden;
					line-height: 0;
				}
				.custom-shape-divider-bottom-1603289794 svg {
					position: relative;
					display: block;
					width: calc(100% + 1.3px);
					height: 76px;
				}
				
				.custom-shape-divider-bottom-1603289794 .shape-fill {
					fill: #FFFFFF;
				}
			`}</style>
		</div>
	)
}
