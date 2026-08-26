import Image from "next/image";
import Call2Img from "../../public/images/icon/call2.svg";
import EmailImg from "../../public/images/icon/email.svg";
import MapImg from "../../public/images/icon/map.svg";
import Star2Img from "../../public/images/v1/star2.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						<span className="aximo-title-animation">
							Contact Information
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={Call2Img} alt="Call Img" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Call us</span>
								<p>
									<a href="tel:+918639424962">+91 86394 24962</a>
								</p>
								<p>
									<a href="tel:+919542488066">+91 95424 88066</a>
								</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={EmailImg} alt="Email" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Email us</span>
								<p>
									<a href="mailto:vashynovatechnologies@gmail.com">
										vashynovatechnologies@gmail.com
									</a>
								</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<Image src={MapImg} alt="Map" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Where we work</span>
								<p>Remote-first — serving clients globally.</p>
								<p>
									<a
										href="https://www.linkedin.com/in/sumanth-v-15b64b3a4/"
										target="_blank"
										rel="noreferrer"
									>
										LinkedIn
									</a>
									{" | "}
									<a href="https://wa.me/918639424962" target="_blank" rel="noreferrer">
										WhatsApp
									</a>
								</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
