import Link from "next/link";
import Logo from "@/components/common/Logo";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<Link href="/" aria-label="Vashynova home">
						<Logo height={30} />
					</Link>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p>&copy; 2026 Vashynova. All rights reserved.</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
