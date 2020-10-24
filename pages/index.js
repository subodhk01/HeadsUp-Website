import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'
import SingleArrowButton from '../components/Buttons/SingleArrowButton'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Timeline from '../components/Timeline/Timeline'
import { loadFirebase } from '../util/firebase'

export default function Home() {
	const [ open, setOpen ] = React.useState(false)
	const [ name, setName ] = React.useState("")
	const [ email, setEmail ] = React.useState("")
	const [ age, setAge ] = React.useState("")
	const [ insta, setInsta ] = React.useState("")
	const [ message, setMessage ] = React.useState("")
	const [ msg1, setMsg1 ] = React.useState({})
	const [ msg2, setMsg2 ] = React.useState({})
	const handleGetAppSubmit = (event) => {
		setMsg1({})
		event.preventDefault()
		let firebase = loadFirebase()
		firebase.firestore().collection("getAppForm").add({
			name: name,
			email: email,
			age: age
		}).then((doc) => {
			console.log(doc)
			setMsg1({
				success: true
			})
			setName("")
			setEmail("")
			setAge("")
		}).catch((error) => {
			console.log(error)
			setMsg1({
				error: true
			})
		})
	}
	const handleMessageSubmit = (event) => {
		setMsg2({})
		event.preventDefault()
		let firebase = loadFirebase()
		firebase.firestore().collection("messageWallForm").add({
			insta: insta,
			email: email,
			message: message
		}).then((doc) => {
			console.log(doc)
			setMsg2({
				success: true
			})
			setInsta("")
			setEmail("")
			setMessage("")
		}).catch((error) => {
			console.log(error)
			setMsg2({
				error: true
			})
		})
	}
	return(
		<div>
			<Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
				<div className="position-relative d-flex justify-content-end">
					<div className="close-button p-4 cursor-pointer" onClick={() => setOpen(false)}>
						<FaTimes size="24" />
					</div>
				</div>
				<form onSubmit={() => handleGetAppSubmit(event)}>
					<Modal.Body>
						<div className="px-2 px-md-4 pb-4">
							<h4 className="text-pink mt-bold">Get the app now!</h4>
							<div className="py-3 mx-auto" style={{maxWidth: "500px"}}>
								<div className="form-group">
									<label>Your Name:</label>
									<input className="form-control" type="text" value={name} onChange={(value) => setName(event.target.value)} required/>
								</div>
								<div className="form-group">
									<label>Your Email:</label>
									<input className="form-control" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
								</div>
								<div className="form-group">
									<label>Your Age:</label>
									<input className="form-control" type="number" value={age} onChange={(event) => setAge(event.target.value)} required/>
								</div>
								<div>
									{msg1 && msg1.success && <span className="text-success">You request has been recorded</span>}
									{msg1 && msg1.error && <span className="text-danger">Unable to process your request, please try again later</span>}
								</div>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<div className="btn btn-hollow" onClick={() => setOpen(false)}>
							Close	
						</div>
						<button type="submit" className="btn btn-solid">
							Submit
						</button>
					</Modal.Footer>
				</form>
			</Modal>
			<div className="">
				<div className="hero-container top-section position-relative">
					<Header open={open} setOpen={setOpen} />
					<div className="row no-gutters align-items-center top-section-content container mx-auto">
						<div className="col-12 col-md-6 py-5 py-md-0">
							<div className="d-flex align-items-center justify-content-center pt-5 pt-md-0 pr-0 pr-md-4">
								<div className="pt-5 pt-md-0">
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
						<div className="col-12 col-md-6 pb-5 pb-md-0">
							<div className="pb-5 pb-md-0">
								<div className="video-container">
									<iframe src="https://www.youtube.com/embed/nYcLnUxYYcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
								<div className="d-flex justify-content-center pb-5 pb-md-0">
									<SingleArrowButton solid onClick={() => setOpen(true)}>
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
			<div className="py-5 bg-white" id="timeline">
				<div className="py-5 container text-center">
					<h1 className="mt-bold font-3">
						Timeline
					</h1>
				</div>
				<div className="mb-5">
					<Timeline />
				</div>
			</div>
			<div className="position-relative" style={{top: "-100px"}} id="wall">

			</div>
			<div className="pt-5 mb-3 outer-wall">
				<div className="container mb-5 text-center">
					<h1 className="mt-bold pb-5 font-3">My Wall</h1>
				</div>
				<div className="wall-container py-5 position-relative">
					<div className="quote-container w-100 font-11 mt-light">
						<div className="quote-box position-absolute p-3 p-md-5 d-flex align-items-center justify-content-center">
							All feelings are valid
						</div>
					</div>
					<div className="py-1 py-md-3">
						<form className="pt-5 m-2" onSubmit={(event) => handleMessageSubmit(event)}>
							<div className="row no-gutters">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<input className="form-control" placeholder="Your Instagram handle" value={insta} onChange={(event) => setInsta(event.target.value)} required/>
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Your Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<textarea className="form-control border-0" rows="5" placeholder="Your Message" value={message} onChange={(event) => setMessage(event.target.value)} required/>
									</div>
									<div className="w-100 text-center pb-3">
										{msg2 && msg2.success && <span className="text-pink">You message has been recorded</span>}
										{msg2 && msg2.error && <span className="text-danger">Unable to process your request, please try again later</span>}
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
			<Footer />
			<style jsx>{`
				.video-container {
					box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
					display: flex;
					margin-bottom: 40px;
				}
				.video-container iframe {
					width: 100%;
					min-height: 300px;
				}
				.outer-wall {
					box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
				}
				.wall-container {
					min-height: 70vh;
					background-image: url("/bg.png");
					background-color: rgba(0,0,0,0.1);
					background-size: cover;
					background-position: center;
				}
				.quote-box {
					width: 100%;
					margin: 0px auto;
					left: 0px;
					right: 0px;
					min-height: 100px;
					top: -78px;
					font-size: 2.5rem;
					font-family: madetommy-bold;
					border-radius: 10px;
				}
				@media(max-width: 576px){
					.quote-box {
						background: white;
						font-size: 1rem;
					}
				}
				.wall-container .form-control {
					max-width: 400px;
					margin: 0px auto;
					border: none;
					border-bottom: 1px solid rgba(255,255,255,0.5);
					color: white;
					background: transparent;
					border-radius: 0px;
					transition: 0.3s;
					font-size: 1.2rem;
					font-family: madetommy-bold;
				}
				.wall-container .form-control:focus {
					border: none;
					outline: none;
					box-shadow: none;
					border-bottom: 3px solid rgba(255,255,255,0.5);
				}
				.wall-container input::-webkit-input-placeholder {color: #06124275;}
				.wall-container input::-moz-placeholder { color: #06124275;}
				.wall-container input:-ms-input-placeholder { color: #06124275;}
				.wall-container input:-moz-placeholder {color: #06124275;}
				.wall-container textarea::-webkit-input-placeholder {color: #06124275;}
				.wall-container textarea::-moz-placeholder { color: #06124275;}
				.wall-container textarea:-ms-input-placeholder { color: #06124275;}
				.wall-container textarea:-moz-placeholder {color: #06124275;} 
				.top-section {
					background: linear-gradient(to bottom,white,#2998ca);
				}
				.top-section-content {
					min-height: calc(100vh - 56px);
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
