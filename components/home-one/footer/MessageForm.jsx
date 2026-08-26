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
				<input {...register("phone")} type="text" placeholder="Your phone number" />
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
