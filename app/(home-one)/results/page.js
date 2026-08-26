import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioList from "@/components/portfolio/one/PortfolioList";

function PortfolioOneColumn() {
	return (
		<>
			<BreadCrumb title="Results" />
			<div className="aximo-section-title center" style={{ padding: "80px 0 0" }}>
				<div className="container">
					<h2>Growth You Can Measure.</h2>
					<p>
						We publish real case studies as engagements complete. Nothing fabricated — no placeholder
						numbers dressed up as results.
					</p>
				</div>
			</div>
			<PortfolioList />
		</>
	);
}

export default PortfolioOneColumn;
