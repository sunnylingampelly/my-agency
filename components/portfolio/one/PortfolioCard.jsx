import Image from "next/image";

function PortfolioCard({ portfolio: { industry, icon, img } }) {
	return (
		<>
			<div
				className="aximo-project-thumb3"
				style={
					img
						? undefined
						: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								minHeight: "260px",
								background: "#F7F9FC",
								border: "1px dashed #D8DBEA",
								borderRadius: "12px",
							}
				}
			>
				{img ? (
					<Image src={img} alt={industry} />
				) : (
					<i className={icon || "icon-data-analysis"} style={{ fontSize: "42px", color: "#6C63FF", opacity: 0.5 }}></i>
				)}
			</div>
			<div className="aximo-project-data3">
				<h3>{industry}</h3>
				<p>Case Study Coming Soon</p>
			</div>
		</>
	);
}

export default PortfolioCard;
