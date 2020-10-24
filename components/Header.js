import SingleArrowButton from './Buttons/SingleArrowButton'

export default function Header(props) {
    return(
        <>
            <div className="bg-white header-container">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h2 className="m-0 mt-bold text-pink">Heads Up</h2>
                        </div>
                        <div>
                            <div className="d-flex align-items-center">
                                <a href="#timeline">
                                    <div className="menu-item">
                                        Timeline
                                        <div className="menu-item-underline"></div>
                                    </div>
                                </a>
                                <a href="#wall">
                                    <div className="menu-item">
                                        Wall
                                        <div className="menu-item-underline"></div>
                                    </div>
                                </a>
                                <div className="menu-item d-none d-md-block">
                                    <SingleArrowButton solid onClick={() => props.setOpen(true)}>
                                        Get the App
                                    </SingleArrowButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                a, a:hover {
                    text-decoration: none;
                }
                a{ color: #174282 }
                .header-container {
                    position: fixed;
                    z-index: 10;
                    width: 100%;
                    box-shadow: 0px 0px 10px 2px #071d2721;
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
            `}</style>
        </>
    )
}