import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-one/auto-slider";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import Image from "next/image";
const services = [
	{
		id: crypto.randomUUID(),
		title: "Attract",
		description:
			"Google & Meta advertising designed around measurable acquisition.",
		icon: "icon-target",
	},
	{
		id: crypto.randomUUID(),
		title: "Create",
		description:
			"AI-powered creative concepts, ad variations, hooks and content.",
		icon: "icon-idea-bulb",
	},
	{
		id: crypto.randomUUID(),
		title: "Capture",
		description:
			"High-converting landing pages and lead capture systems.",
		icon: "icon-layers",
	},
	{
		id: crypto.randomUUID(),
		title: "Qualify",
		description:
			"AI-powered lead qualification and intelligent conversations.",
		icon: "icon-data-analysis-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Convert",
		description:
			"Automated WhatsApp, email, CRM and appointment workflows.",
		icon: "icon-message",
	},
	{
		id: crypto.randomUUID(),
		title: "Optimize",
		description:
			"AI-assisted analytics and continuous campaign optimization.",
		icon: "icon-settings",
	},
];
function ServicePage() {
	return (
		<>
			<BreadCrumb title="Services" />
			<div className="section aximo-section-padding4 pb-0">
				<div className="container">
					<div className="aximo-section-title center title-description">
						<h2>
							One Growth Engine. Every Stage of the{" "}
							<span className="aximo-title-animation">Customer Journey</span>.
						</h2>
						<p>
							Vashynova combines AI, performance marketing and automation
							across six connected stages — not six disconnected services.
						</p>
					</div>
				</div>
			</div>
			<div className="container" style={{ marginTop: "-16px", marginBottom: "48px" }}>
				<div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "360px" }}>
					<Image
						src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1800&q=75"
						alt="Wireframes and campaign layouts being planned on a wall"
						fill
						sizes="100vw"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
			<Services services={services} />
			<AutoSlider />
			<WhyChooseUs />
		</>
	);
}

export default ServicePage;
