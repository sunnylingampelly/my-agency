import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Link from "next/link";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<span className="aximo-hero-eyebrow">AI-Powered Customer Acquisition</span>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<h1>Turn Marketing Spend Into Predictable Growth.</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p className="aximo-hero-statement">
					<strong>We don&apos;t just run ads. We build AI-powered customer acquisition systems.</strong>
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					Vashynova combines AI, performance marketing and automation to help businesses attract
					better leads, respond faster and convert more customers.
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<div className="aximo-hero-user-wrap">
					<div className="aximo-hero-user-data">
						<p>AI + Paid Media + Automation + Conversion</p>
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/contact-us">
					Build My Growth Engine <i className="icon-call"></i>
				</Link>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
