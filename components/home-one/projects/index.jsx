"use client";
import Link from "next/link";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: "healthcare-wellness",
		industry: "Healthcare & Wellness",
	},
	{
		id: "e-commerce",
		industry: "E-Commerce",
	},
	{
		id: "b2b",
		industry: "B2B",
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Growth You <span className="aximo-title-animation">Can Measure.</span>
					</h2>
					<p>We publish real case studies as engagements complete — nothing fabricated.</p>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="container">
				<div className="text-center" style={{ marginTop: "40px" }}>
					<Link href="/results">See how we approach results</Link>
				</div>
			</div>
		</div>
	);
}

export default Projects;
