import Image from "next/image";
import FounderImg from "@/public/images/about/1780680379518.png";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import FadeInUp from "@/components/animation/FadeInUp";

const WHATSAPP_LINK =
	"https://wa.me/918639424962?text=" +
	encodeURIComponent("Hi Sunny, I found Vashynova online and I'd like to talk about growing my business.");

function Founder({ variant = "full" }) {
	const isCompact = variant === "compact";

	return (
		<div className={isCompact ? "" : "section aximo-section-padding"}>
			<div className="container">
				<FadeInUp>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							gap: isCompact ? "32px" : "48px",
							background: isCompact ? "#F7F9FC" : "transparent",
							border: isCompact ? "1px solid #E5E7F0" : "none",
							borderRadius: isCompact ? "20px" : "0",
							padding: isCompact ? "40px" : "0",
						}}
					>
						<div
							style={{
								flexShrink: 0,
								width: isCompact ? "140px" : "220px",
								height: isCompact ? "140px" : "220px",
								borderRadius: "50%",
								overflow: "hidden",
								position: "relative",
								border: "3px solid #6C63FF",
							}}
						>
							<Image
								src={FounderImg}
								alt="Lingampally Sunny, Founder of Vashynova"
								fill
								sizes={isCompact ? "140px" : "220px"}
								style={{ objectFit: "cover" }}
							/>
						</div>

						<div style={{ flex: "1 1 320px" }}>
							{!isCompact && (
								<p
									style={{
										fontSize: "13px",
										fontWeight: 700,
										letterSpacing: "0.14em",
										textTransform: "uppercase",
										color: "#00D4AA",
										marginBottom: "10px",
									}}
								>
									Founder
								</p>
							)}
							<h3 style={{ marginBottom: "4px" }}>Lingampally Sunny</h3>
							<p
								style={{
									fontWeight: 600,
									color: "#6C63FF",
									marginBottom: isCompact ? "12px" : "18px",
								}}
							>
								Founder, Vashynova
							</p>

							{isCompact ? (
								<p style={{ marginBottom: "20px" }}>
									Vashynova is led by Lingampally Sunny, who works directly with every client to
									design and run their growth engine — no templated playbooks, no hand-offs.
								</p>
							) : (
								<>
									<p>
										Sunny founded Vashynova to close the gap between running ads and actually
										growing a business. Too many companies were pouring budget into campaigns
										with no system behind them — slow follow-ups, unqualified leads, and no real
										visibility into what was converting.
									</p>
									<p style={{ marginBottom: "20px" }}>
										Vashynova is his answer: AI, performance marketing and automation working
										together as one system, from the first click to the closed customer. He
										works directly with every client on strategy — not a templated playbook
										handed off to someone else.
									</p>
								</>
							)}

							<a
								href={WHATSAPP_LINK}
								target="_blank"
								rel="noreferrer"
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "10px",
									padding: "13px 24px",
									borderRadius: "50px",
									background: "#25D366",
									color: "#fff",
									fontWeight: 700,
									textDecoration: "none",
								}}
							>
								<WhatsAppIcon size={20} />
								Chat with Sunny on WhatsApp
							</a>
						</div>
					</div>
				</FadeInUp>
			</div>
		</div>
	);
}

export default Founder;
