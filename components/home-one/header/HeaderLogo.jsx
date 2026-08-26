import Link from "next/link";
import Logo from "@/components/common/Logo";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/" aria-label="Vashynova home">
				<Logo height={34} />
			</Link>
		</div>
	);
}

export default HeaderLogo;
