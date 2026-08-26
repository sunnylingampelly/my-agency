import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					Why Businesses Choose
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				Vashynova
			</h2>
			<p>
				Traditional agencies stop at running ads. We build systems — AI and automation working alongside
				experienced marketers to attract, capture, qualify, convert and retain customers.
			</p>
		</div>
	);
}

export default Content;
