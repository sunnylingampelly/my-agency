import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";

const pillars = [
	{ id: "attract", label: "Attract", icon: "icon-target" },
	{ id: "capture", label: "Capture", icon: "icon-layers" },
	{ id: "qualify", label: "Qualify", icon: "icon-data-analysis-1" },
	{ id: "convert", label: "Convert", icon: "icon-message" },
];

function StoryPhotos() {
	return (
		<FadeInStaggerTwo className="row align-items-stretch" style={{ marginBottom: "8px" }}>
			<FadeInStaggerTwoChildren className="col-lg-7">
				<div
					style={{
						position: "relative",
						borderRadius: "16px",
						overflow: "hidden",
						minHeight: "320px",
						height: "100%",
					}}
				>
					<Image
						src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=75"
						alt="A small team working through campaign and product plans at their laptops"
						fill
						sizes="(max-width: 991px) 100vw, 60vw"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-5">
				<div
					className="row"
					style={{ height: "100%", marginTop: "16px" }}
				>
					{pillars.map((pillar) => (
						<div className="col-6" key={pillar.id} style={{ marginBottom: "16px" }}>
							<div
								style={{
									border: "1px solid #E5E7F0",
									borderRadius: "16px",
									padding: "28px 16px",
									textAlign: "center",
									background: "#F7F9FC",
									height: "100%",
								}}
							>
								<i className={pillar.icon} style={{ fontSize: "28px", color: "#6C63FF" }}></i>
								<p style={{ marginTop: "12px", marginBottom: 0, fontWeight: 600 }}>{pillar.label}</p>
							</div>
						</div>
					))}
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default StoryPhotos;
