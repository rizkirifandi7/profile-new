import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">Rizki Rifani</h1>

				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>

					<li>
						<a href="#portfolio" className="footer__link">
							Portfolio
						</a>
					</li>

					<li>
						<a href="#services" className="footer__link">
							Services
						</a>
					</li>
				</ul>

				<div className="footer__social">
					<a
						href="https://www.instagram.com/rizki.rifandii/?hl=id"
						className="footer__social-link"
					>
						<i class="bx bxl-instagram"></i>
					</a>

					<a
						href="https://github.com/rizkirifandi7"
						className="footer__social-link"
					>
						<i class="bx bxl-github"></i>
					</a>

					<a
						href="https://www.linkedin.com/in/rizkirifani"
						className="footer__social-link"
					>
						<i class="bx bxl-linkedin"></i>
					</a>
				</div>

                <span className="footer__copy">&#169; Rizki Rifani. All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
