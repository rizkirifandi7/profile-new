import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personal journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content-active"
								: "qualification__content"
						}
					>
						{/* Kesatu */}
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Natural Sciences Major</h3>
								<span className="qualification__subtitle">
									Indonesian - High School 21 Bandung
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2018 - 2021
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						{/* Kedua */}
						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">Undergraduate Informatics Engineering Student</h3>
								<span className="qualification__subtitle">
									Indonesian - Indonesia Computer University
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - 2025 (Expected)
								</div>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__content-active"
								: "qualification__content"
						}
					>
						{/* Kesatu */}
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Development</h3>
								<span className="qualification__subtitle">Freelancer</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - Present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						{/* Kedua */}
						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">Graphic Designer</h3>
								<span className="qualification__subtitle">Freelancer</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2018 - 2021
								</div>
							</div>
						</div>

                        {/* Ketiga */}
                        <div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Designer</h3>
								<span className="qualification__subtitle">Freelancer</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - Present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
