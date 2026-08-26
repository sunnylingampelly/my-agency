"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="service">Services</NavItem>
							<NavItem url="results">Results</NavItem>
							<NavItem url="about-us">About Us</NavItem>
							<NavItem url="faq">FAQ</NavItem>
							<NavItem url="contact-us">Contact</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Vashynova" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
