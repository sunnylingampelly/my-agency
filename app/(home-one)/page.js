import Founder from "@/components/about/Founder";
import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Attract",
		description: "Google & Meta advertising designed around measurable acquisition.",
		icon: "icon-target",
	},
	{
		id: crypto.randomUUID(),
		title: "Create",
		description: "AI-powered creative concepts, ad variations, hooks and content.",
		icon: "icon-idea-bulb",
	},
	{
		id: crypto.randomUUID(),
		title: "Capture",
		description: "High-converting landing pages and lead capture systems.",
		icon: "icon-layers",
	},
	{
		id: crypto.randomUUID(),
		title: "Qualify",
		description: "AI-powered lead qualification and intelligent conversations.",
		icon: "icon-data-analysis-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Convert",
		description: "Automated WhatsApp, email, CRM and appointment workflows.",
		icon: "icon-message",
	},
	{
		id: crypto.randomUUID(),
		title: "Optimize",
		description: "AI-assisted analytics and continuous campaign optimization.",
		icon: "icon-settings",
	},
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<div style={{ paddingBottom: "100px" }}>
				<Founder variant="compact" />
			</div>
			<Projects />
			<WhyChooseUs />
			<AutoSlider />
		</>
	);
}
