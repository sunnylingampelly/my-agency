import FadeInUp from "../animation/FadeInUp";
function FaqAccordion() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Questions, <span className="aximo-title-animation">Answered.</span>
					</h2>
				</div>

				<FadeInUp className="accordion aximo-accordion-wrap" id="aximo-accordion">
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
							>
								What exactly does Vashynova do?
							</button>
						</h3>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								We build customer acquisition systems: paid advertising, AI-driven creative and
								qualification, landing pages, and automation that connects leads to your sales process
								— combined into one system rather than run separately.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header" id="headingOne">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
							>
								Do you manage Google and Meta Ads?
							</button>
						</h3>
						<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								Yes. Paid media is the acquisition layer of the system — built and optimized around
								qualified leads and revenue, not just clicks.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
							>
								Do you create landing pages?
							</button>
						</h3>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Yes. High-converting landing pages and lead capture flows are built specifically to
								match each campaign.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
							>
								Can you automate WhatsApp follow-ups?
							</button>
						</h3>
						<div
							id="collapseFour"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								Yes, where it fits your sales process. We can configure automated WhatsApp, email and
								CRM workflows to respond to and qualify leads faster.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFive"
							>
								Can Vashynova integrate with our CRM?
							</button>
						</h3>
						<div
							id="collapseFive"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								In most cases, yes. We connect campaign, lead and qualification data into the CRM or
								tools you already use wherever a practical integration exists.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSix"
							>
								Do you work with small businesses?
							</button>
						</h3>
						<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
							<div className="accordion-body">
								Yes. The system scales down to fit smaller budgets and simpler funnels just as it
								scales up for larger operations.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSeven"
							>
								How does AI fit into your marketing process?
							</button>
						</h3>
						<div
							id="collapseSeven"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								AI supports creative generation, audience analysis, lead qualification, follow-up and
								ongoing optimization. It handles speed and scale; our team handles strategy and
								judgment.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h3 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseEight"
							>
								Do you guarantee leads?
							</button>
						</h3>
						<div
							id="collapseEight"
							className="accordion-collapse collapse"
							data-bs-parent="#aximo-accordion"
						>
							<div className="accordion-body">
								No. Results depend on your market, offer, budget and sales process, among other
								factors — anyone who guarantees specific numbers upfront isn&apos;t being straight with
								you. We tell you what&apos;s realistic before you spend a dollar.
							</div>
						</div>
					</div>
				</FadeInUp>
			</div>
		</div>
	);
}

export default FaqAccordion;
