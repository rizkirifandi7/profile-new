import React, { useState } from "react";
import "./services.css";

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>

			<span className="section__subtitle">What I offer</span>

			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="sevices__title">
							Web <br /> Development
						</h3>
					</div>

					<span className="services__button" onClick={() => toggleTab(1)}>
						View More{" "}
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div
						className={
							toggleState === 1
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Web Development</h3>
							<p className="services__modal-description">
								The process of creating, developing, and maintaining a website
								or web application.
							</p>

							<ul className="services__modal-sevices grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Front-end and Back-end development
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Designing and creating website layouts
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Website maintenance and updates
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Database management</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Debugging and troubleshooting
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="sevices__title">
							Web <br /> Designer
						</h3>
					</div>

					<span onClick={() => toggleTab(2)} className="services__button">
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div
						className={
							toggleState === 2
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Web Designer</h3>
							<p className="services__modal-description">
								Designing the visual aspects and appearance of an attractive
								website.
							</p>

							<ul className="services__modal-sevices grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Creating visual designs website
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">Designing page layouts</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Creating custom design elements
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Creating prototypes or wireframes
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Designing for responsiveness
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Considering accessibility
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
