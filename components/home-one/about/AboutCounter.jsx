const capabilities = [
	"AI-Powered",
	"Full-Funnel",
	"Automation-First",
	"Data-Driven",
];

function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			{capabilities.map((capability) => (
				<div className="aximo-counter-data" key={capability}>
					<h2 className="aximo-counter-number">{capability}</h2>
				</div>
			))}
		</div>
	);
}

export default AboutCounter;
