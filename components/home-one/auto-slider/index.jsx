"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{ id: "healthcare", title: "Healthcare" },
	{ id: "wellness-spas", title: "Wellness & Spas" },
	{ id: "hospitality", title: "Hospitality" },
	{ id: "real-estate", title: "Real Estate" },
	{ id: "e-commerce", title: "E-Commerce" },
	{ id: "b2b", title: "B2B" },
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="aximo-section-title center">
				<span
					style={{
						display: "block",
						textAlign: "center",
						textTransform: "uppercase",
						letterSpacing: "1px",
						fontSize: "14px",
						fontWeight: 600,
					}}
				>
					Powering The Next Generation Of Customer Acquisition
				</span>
			</div>
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
