function Logo({ height = 34 }) {
	return (
		<span
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 10,
			}}
		>
			<span
				aria-hidden="true"
				style={{
					width: height,
					height: height,
					borderRadius: height * 0.28,
					background: "linear-gradient(135deg, #6C63FF, #00D4AA)",
					color: "#fff",
					fontFamily: "var(--font-syne), sans-serif",
					fontWeight: 700,
					fontSize: height * 0.5,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0,
				}}
			>
				V
			</span>
			<span
				style={{
					fontFamily: "var(--font-syne), sans-serif",
					fontWeight: 700,
					fontSize: height * 0.62,
					letterSpacing: "-0.01em",
					color: "#fff",
					lineHeight: 1,
				}}
			>
				Vashy
				<span
					style={{
						background: "linear-gradient(135deg, #6C63FF, #00D4AA)",
						WebkitBackgroundClip: "text",
						backgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					nova
				</span>
			</span>
		</span>
	);
}

export default Logo;
