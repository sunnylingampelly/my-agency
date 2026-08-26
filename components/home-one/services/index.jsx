import FadeInStagger from "@/components/animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						We build your <span className="aximo-title-animation">growth engine</span>
					</h2>
				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item, index) => (
							<FadeInStagger key={item.id} index={index} className="col-md-6 col-lg-6">
								<ServiceCard service={item} />
							</FadeInStagger>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
