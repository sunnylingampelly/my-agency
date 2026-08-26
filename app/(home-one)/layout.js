import { inter, syne } from "../fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

// fonts
import "../../public/css/fontawesome.css";
import "../../public/css/icomoon.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/home-one/footer";
import Header from "@/components/home-one/header";

// main css
import "../../public/css/app.css";
import "../../public/css/main.css";
import "../../public/css/mobile-nav.css";
import "../../public/css/vashynova-theme.css";

export const metadata = {
	title: {
		default: "Vashynova | AI-Powered Customer Acquisition",
		template: "%s | Vashynova",
	},
	description:
		"Vashynova builds AI-powered customer acquisition systems that combine paid media, AI lead qualification and automation to turn marketing spend into predictable growth.",
	openGraph: {
		title: "Vashynova | AI-Powered Customer Acquisition",
		description:
			"We don't just run ads. We build AI-powered customer acquisition systems that turn leads into revenue.",
		siteName: "Vashynova",
		type: "website",
	},
};

export default function HomeOneLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${syne.variable} ${inter.variable}`}>
				<ImportBsJS />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
