import React, { useState } from "react";

interface FormState {
	name: string;
	email: string;
	message: string;
}

const ContactForm = () => {
	const [formState, setFormState] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Replace logic below with email.js
		console.log(formState);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-12 tablet:mx-auto px-4 md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
		>
			<div className="laptop:flex gap-6">
				<div className="mb-4">
					<input
						type="text"
						id="name"
						name="name"
						value={formState.name}
						onChange={handleChange}
						className="w-full px-3 py-2 border-b-2 border-primary transition-all duration-300 focus:outline-none focus:border-b-4 focus:w-[105%] focus:h-[105%]"
						required
						placeholder="Your name"
					/>
				</div>
				<div className="mb-4">
					<input
						type="email"
						id="email"
						name="email"
						value={formState.email}
						onChange={handleChange}
						className="w-full px-3 py-2 border-b-2 border-primary transition-all duration-300 focus:outline-none focus:border-b-4 focus:w-[105%] focus:h-[105%]"
						required
						placeholder="Your email address"
					/>
				</div>
			</div>
			<div className="mb-6">
				<textarea
					id="message"
					name="message"
					value={formState.message}
					onChange={handleChange}
					rows={4}
					className="w-full px-3 py-2 border-b-2 border-primary transition-all duration-300 focus:outline-none focus:border-b-4 focus:w-[105%] focus:h-[105%] resize-none"
					required
					placeholder="What Can I do for you?"
				></textarea>
			</div>
			<button
				type="submit"
				className="w-full px-4 py-2 text-sm font-medium text-white bg-primary  outline-none hover:bg-slate-700 transition delay-150 duration-300 ease-in-out focus:bg-slate-400"
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
