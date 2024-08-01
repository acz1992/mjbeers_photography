import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			console.log("Form Data: ", formData);

			emailjs
				.sendForm(
					import.meta.env.VITE_SERVICE_ID,
					import.meta.env.VITE_TEMPLATE_ID,
					form.current
				)
				.then(
					(result) => {
						console.log("SUCCESS!", result);
						setEmailSubmitted(true);
						setFormData({
							name: "",
							email: "",
							subject: "",
							message: "",
						});
					},
					(error) => {
						console.error(`Failed to send email: ${error.text}`);
					}
				);
		} else {
			console.error("The form reference is null.");
		}
	};

	// Overlay confirming Form Submission
	useEffect(() => {
		if (emailSubmitted) {
			const handleOutsideClick = (e: MouseEvent) => {
				if (form.current && !form.current.contains(e.target as Node)) {
					setEmailSubmitted(false);
				}
			};

			document.addEventListener("mousedown", handleOutsideClick);

			return () => {
				document.removeEventListener("mousedown", handleOutsideClick);
			};
		}
	}, [emailSubmitted]);

	return (
		<>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="w-full md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
			>
				<div className="tablet:flex justify-between gap-6">
					<div className="mb-4 w-full">
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							className="w-full pl-2 pb-4 pt-2 border-b-2 border-primary transition-all duration-300 focus:outline-none focus:border-b-4 bg-background dark:bg-primary-dark dark:placeholder-gray-500 dark:text-primary"
							required
							placeholder="Your name"
						/>
					</div>
					<div className="mb-4 w-full">
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full pl-2 pb-4 pt-2 border-b-2 border-primary transition-all duration-300 focus:outline-none focus:border-b-4 bg-background dark:bg-primary-dark dark:placeholder-gray-500 dark:text-primary"
							required
							placeholder="Your email address"
						/>
					</div>
				</div>
				<div className="mb-4">
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleInputChange}
						className="w-full pl-2 pb-4 pt-2 border-b-2 border-primary transition-all duration-300 focus:outline-none focus:border-b-4 bg-background dark:bg-primary-dark dark:placeholder-gray-500 dark:text-primary"
						required
						placeholder="Subject"
					/>
				</div>
				<div className="mb-6">
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						rows={4}
						className="w-full pl-2 pb-4 pt-2 border-b-2 border-primary transition-all duration-300 focus:outline-none focus:border-b-4 resize-none bg-background dark:bg-primary-dark dark:placeholder-gray-500 dark:text-primary"
						required
						placeholder="What Can I do for you?"
					></textarea>
				</div>
				<div className="flex w-full justify-center">
					<button
						type="submit"
						className="w-1/3 justify-self-center px-4 py-2 text-sm font-medium text-white bg-primary dark:bg-primary-dark dark:text-background-dark outline-none hover:bg-slate-700 transition delay-150 duration-300 ease-in-out focus:bg-slate-400 "
					>
						Submit
					</button>
				</div>
			</form>

			{emailSubmitted && (
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-[#eef7f9] p-5 rounded-lg">
						<p className="text-primary text-lg font-bold mt-2">
							I&apos;ll be in touch soon
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactForm;
