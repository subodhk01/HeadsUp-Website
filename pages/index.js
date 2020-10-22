import Head from 'next/head'
import SingleArrowButton from '../components/Buttons/SingleArrowButton'

export default function Home() {
	return(
		<div>
			<div className="">
				<div className="hero-container top-section position-relative">
					<div className="container">
						<div className="d-flex align-items-center justify-content-between">
							<div>
								<h2 className="m-0 mt-bold">HEADS UP</h2>
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
					<div className="row no-gutters align-items-center top-section-content">
						<div className="col-12 col-md-6">
							<div className="d-flex align-items-center justify-content-center">
								<div>
									<h1>Heads Up!</h1>
									<h5>Building the mental wellness community India needs!</h5>
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
				asdfsdfkjds;klfjkl;j
			</div>
			<style jsx>{`
				.top-section {
					background: linear-gradient(to bottom,white,#174282)
				}
				.top-section-content {
					min-height: calc(100vh - 94px - 76px);
				}
				.menu-item {
					padding: 34px 20px;
					cursor: pointer;
					font-family: madetommy-bold;
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
