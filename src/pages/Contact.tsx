import { TypeAnimation } from "react-type-animation";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return (
		<section
			className="mx-10 laptop:mx-0 laptop:my-40 flex flex-col 
		laptop:justify-items-center items-center laptop:grid grid-cols-2 grid-cols-[50%_40%] "
		>
			<div className="bg-white flex flex-col mb-10 laptop:mb-0 ">
				<TypeAnimation
					sequence={[
						"Like the look of my work?",
						1000, // wait 1s before replacing "Mice" with "Hamsters"
						"Have an event coming up?",
						1000,
						"Or just want some nice pictures?",
						1000,
					]}
					wrapper="span"
					speed={50}
					style={{
						fontSize: "2em",
						display: "inline-block",
						height: "100px",
					}}
					repeat={Infinity}
				/>
				<h3 className="mt-1 text-[1.6rem]">
					Then don't heistate to get in touch!
				</h3>
			</div>

			<ContactForm />
		</section>
	);
};

export default Contact;
