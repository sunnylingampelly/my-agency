import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						Built To Do More <span className="aximo-title-animation">Than Run Ads.</span>
					</h2>
					<p>
						We don&apos;t just run ads. We build AI-powered customer acquisition systems that combine
						performance marketing, automation, and AI to attract, capture, qualify, convert and retain
						customers — not just generate traffic.
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
