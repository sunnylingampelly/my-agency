import Founder from "@/components/about/Founder";
import Story from "@/components/about/story";
import BreadCrumb from "@/components/common/Breadcrumb";
import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About" />
			<About />
			<Story />
			<Founder />
			<AutoSlider />
		</>
	);
}

export default AboutUs;
