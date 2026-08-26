"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Field from "../common/Field";

const WHATSAPP_LINK =
	"https://wa.me/918639424962?text=" +
	encodeURIComponent("Hi Vashynova, I'd like to book a growth strategy call.");

function ContactForm() {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm();
	const [submitted, setSubmitted] = useState(false);

	const requireEmailOrPhone = (value) =>
		Boolean(value || getValues("email") || getValues("phone")) ||
		"Please provide your email or phone number.";

	const submitForm = (formData) => {
		const { name, email, phone, company, message } = formData;

		const lines = [
			`Hi Vashynova, I'd like to request a growth audit.`,
			"",
			`Name: ${name}`,
			`Email: ${email || "Not provided"}`,
			`Phone: ${phone || "Not provided"}`,
			`Business/Industry: ${company || "Not provided"}`,
			"",
			"What are you looking to grow?",
			message || "Not provided",
		];

		const whatsappLink = `https://wa.me/918639424962?text=${encodeURIComponent(lines.join("\n"))}`;

		setSubmitted(true);
		window.open(whatsappLink, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								Let&apos;s Build Your <span className="aximo-title-animation">Growth Engine.</span>
							</h2>
							<p>Tell us about your business and where you want to grow — we&apos;ll take it from there.</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="text"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { validate: requireEmailOrPhone })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" error={errors.phone}>
										<input
											{...register("phone", { validate: requireEmailOrPhone })}
											type="tel"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Business / Industry">
										<input
											{...register("company")}
											type="text"
											name="company"
											id="company"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>What are you looking to grow?</label>
									<textarea {...register("message")} name="message"></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send on WhatsApp
								</button>
								{submitted && (
									<p className="aximo-form-status" style={{ marginTop: "15px" }}>
										Opening WhatsApp with your message ready to send.
									</p>
								)}
								<div style={{ marginTop: "15px" }}>
									<a
										href={WHATSAPP_LINK}
										target="_blank"
										rel="noreferrer"
										className="aximo-call-btn"
									>
										Chat on WhatsApp Instead
									</a>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-5">
						<div
							style={{
								position: "relative",
								borderRadius: "16px",
								overflow: "hidden",
								minHeight: "420px",
								height: "100%",
								marginTop: "32px",
							}}
						>
							<Image
								src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=75"
								alt="Two people reviewing campaign and lead data together"
								fill
								sizes="(max-width: 991px) 100vw, 40vw"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
