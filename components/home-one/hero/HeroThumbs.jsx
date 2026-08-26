import FadeInRight from "@/components/animation/FadeInRight";

const stages = [
	"Google + Meta Ads",
	"AI Creative Engine",
	"Landing Page",
	"AI Lead Qualification",
	"WhatsApp / CRM",
	"Appointment",
	"Customer",
	"Revenue",
];

function HeroThumbs() {
	return (
		<FadeInRight className="aximo-hero-thumb">
			<div
				className="vsh-engine-card"
				style={{
					background: "var(--white-color, #fff)",
					border: "1px solid rgba(0,0,0,0.08)",
					borderRadius: "16px",
					padding: "28px 24px",
					boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
				}}
			>
				<div className="vsh-engine-list" style={{ position: "relative" }}>
					<span
						className="vsh-engine-line"
						style={{
							position: "absolute",
							left: "7px",
							top: "6px",
							bottom: "6px",
							width: "2px",
							background: "var(--border-color, rgba(0,0,0,0.12))",
						}}
					/>
					{stages.map((stage, index) => (
						<div
							key={stage}
							className="vsh-engine-item"
							style={{
								position: "relative",
								display: "flex",
								alignItems: "center",
								gap: "16px",
								padding: index === stages.length - 1 ? "0" : "0 0 20px 0",
							}}
						>
							<span
								className="vsh-engine-dot"
								style={{
									position: "relative",
									zIndex: 1,
									flex: "0 0 16px",
									width: "16px",
									height: "16px",
									borderRadius: "50%",
									background: "var(--theme-color, #6f4ef2)",
									border: "3px solid var(--white-color, #fff)",
									boxShadow: "0 0 0 1px rgba(0,0,0,0.08)",
								}}
							/>
							<span
								className="vsh-engine-label"
								style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.3 }}
							>
								{stage}
							</span>
						</div>
					))}
				</div>
			</div>
			<p
				className="vsh-engine-caption"
				style={{ fontSize: "13px", opacity: 0.65, marginTop: "12px" }}
			>
				Illustrative representation of a Vashynova growth engine.
			</p>
		</FadeInRight>
	);
}

export default HeroThumbs;
