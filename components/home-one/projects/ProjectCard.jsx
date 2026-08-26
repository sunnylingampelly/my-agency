function ProjectCard({ project: { industry } }) {
	return (
		<div className="swiper-slide">
			<div
				className="aximo-project-thumb"
				style={{
					minHeight: "360px",
					background: "rgba(255,255,255,0.03)",
				}}
			>
				<div className="aximo-project-wrap">
					<div className="aximo-project-data">
						<h3>{industry}</h3>
						<p>Case Study Coming Soon</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
