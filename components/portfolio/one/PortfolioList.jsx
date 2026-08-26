import FadeInStagger from "@/components/animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
	{
		id: crypto.randomUUID(),
		industry: "Healthcare & Wellness",
		icon: "icon-data-analysis",
	},
	{
		id: crypto.randomUUID(),
		industry: "E-Commerce",
		icon: "icon-layers",
	},
	{
		id: crypto.randomUUID(),
		industry: "B2B",
		icon: "icon-data-analysis",
	},
];
function PortfolioList() {
	return (
		<div className="aximo-project-one-column">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Built For Businesses Where <span className="aximo-title-animation">Every Lead Matters.</span>
					</h2>
				</div>
				{portfolioListData.map((portfolio, index) => (
					<FadeInStagger className="aximo-project-wrap3" key={portfolio.id} index={index}>
						<PortfolioCard portfolio={portfolio} />
					</FadeInStagger>
				))}
			</div>
		</div>
	);
}

export default PortfolioList;
