"use client";
import FadeInUp from "@/components/animation/FadeInUp";

const pillars = ["Attract", "Capture", "Qualify", "Convert", "Retain"];

function Video() {
	return (
		<FadeInUp className="aximo-video-wrap">
			<div
				style={{
					padding: "60px 40px",
					minHeight: "320px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					gap: "24px",
				}}
			>
				<h3 style={{ margin: 0 }}>AI + Human Strategy, Working Together</h3>
				<p style={{ margin: 0 }}>
					AI handles scale and speed. Experienced marketers handle strategy and judgment — together they
					run the full acquisition funnel, end to end.
				</p>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "12px",
					}}
				>
					{pillars.map((pillar) => (
						<span
							key={pillar}
							style={{
								padding: "8px 18px",
								borderRadius: "50px",
								border: "1px solid var(--heading-color)",
								fontWeight: 600,
							}}
						>
							{pillar}
						</span>
					))}
				</div>
			</div>
		</FadeInUp>
	);
}

export default Video;
