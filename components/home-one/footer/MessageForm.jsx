"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArrowRight3Img from "../../../public/images/icon/arrow-right3.svg";
import Field from "../../common/Field";

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [submitted, setSubmitted] = useState(false);

	const validatePhone = (value) => {
		if (!value) return true;
		return /^[+]?[\d\s\-()]{7,20}$/.test(value) || "Enter a valid phone number (digits only).";
	};

	// Block letters and other non-phone characters as the user types, instead
	// of only catching it on submit.
	const sanitizePhoneInput = (e) => {
		const cleaned = e.target.value.replace(/[^\d\s+\-()]/g, "");
		if (cleaned !== e.target.value) {
			e.target.value = cleaned;
		}
	};

	const submitForm = (formData) => {
		const { name, email, phone, message } = formData;

		const lines = [
			`Hi Vashynova, I'd like to get in touch.`,
			"",
			`Name: ${name}`,
			`Email: ${email || "Not provided"}`,
			`Phone: ${phone || "Not provided"}`,
			"",
			"Message:",
			message || "Not provided",
		];

		const whatsappLink = `https://wa.me/918639424962?text=${encodeURIComponent(lines.join("\n"))}`;

		setSubmitted(true);
		window.open(whatsappLink, "_blank", "noopener,noreferrer");
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="footer-name"
						placeholder="Your Name"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="footer-email"
						placeholder="Your email address"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.phone}>
					<input
						{...register("phone", { validate: validatePhone })}
						onInput={sanitizePhoneInput}
						type="tel"
						inputMode="tel"
						id="footer-phone"
						placeholder="Your phone number"
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<textarea
					{...register("message")}
					name="message"
					placeholder="Write your message here..."
				></textarea>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Send on WhatsApp{" "}
				<span>
					<Image src={ArrowRight3Img} alt="ArrowRight3Img" />
				</span>
			</button>
			{submitted && (
				<p className="aximo-form-status" style={{ marginTop: "10px" }}>
					Opening WhatsApp with your message ready to send.
				</p>
			)}
		</form>
	);
}

export default MessageForm;
