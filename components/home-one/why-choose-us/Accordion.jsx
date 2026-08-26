import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";

const accordionData = [
	{
		id: "collapseOne",
		number: "01",
		title: "AI-First",
		description: "AI is embedded into the workflow instead of being an afterthought.",
		show: true,
	},
	{
		id: "collapseTwo",
		number: "02",
		title: "Revenue-Focused",
		description: "We optimize around qualified leads, appointments and customers.",
		show: false,
	},
	{
		id: "collapseThree",
		number: "03",
		title: "Full Funnel",
		description: "We don't stop when the lead is generated.",
		show: false,
	},
	{
		id: "collapseFour",
		number: "04",
		title: "Automation",
		description: "We reduce manual work and response delays.",
		show: false,
	},
	{
		id: "collapseFive",
		number: "05",
		title: "Data-Driven",
		description: "Every decision is supported by measurable performance data.",
		show: false,
	},
	{
		id: "collapseSix",
		number: "06",
		title: "Human Strategy",
		description: "AI handles scale and speed. Experienced marketers handle strategy and judgment.",
		show: false,
	},
];

function Accordion() {
	return (
		<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
			{accordionData.map((item) => (
				<FadeInStaggerTwoChildren className="accordion-item" key={item.id}>
					<h3 className="accordion-header">
						<button
							className={`accordion-button${item.show ? "" : " collapsed"}`}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={`#${item.id}`}
						>
							{item.number}/ {item.title}
						</button>
					</h3>
					<div
						id={item.id}
						className={`accordion-collapse collapse${item.show ? " show" : ""}`}
						data-bs-parent="#aximo-accordion"
					>
						<div className="accordion-body">{item.description}</div>
					</div>
				</FadeInStaggerTwoChildren>
			))}
		</FadeInStaggerTwo>
	);
}

export default Accordion;
