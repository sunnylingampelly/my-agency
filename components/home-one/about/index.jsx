import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import AboutCounter from "./AboutCounter";
import Video from "./Video";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									We don&apos;t just run ads. We build
									<span className="aximo-title-icon">
										<Image src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								AI-powered customer acquisition systems.
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								Vashynova combines AI, performance marketing and automation to help businesses attract,
								capture, qualify, convert and retain customers. AI handles scale and speed — our team
								handles strategy and judgment.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
