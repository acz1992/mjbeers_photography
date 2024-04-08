import { TypeAnimation } from "react-type-animation";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: "-100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "-100%" }}
			transition={transition1}
			className="mx-10 laptop:mx-20 laptop:my-[20%] desktop:my-[14%] flex flex-col 
		laptop:justify-items-center items-center laptop:grid grid-cols-2 grid-cols-[50%_40%]"
		>
			<div>
				<TypeAnimation
					sequence={[
						"Like the look of my work?",
						1000,
						"Have an event coming up?",
						1000,
						"Or just want nice pictures?",
						1000,
					]}
					wrapper="span"
					speed={50}
					style={{
						fontSize: "2rem",
						display: "inline-block",
						height: "100px",
					}}
					repeat={Infinity}
				/>
				<h3 className="text-[1.6rem] mb-10 laptop:mb-0">
					Then don't heistate to get in touch!
				</h3>
			</div>

			<ContactForm />
		</motion.section>
	);
};

export default Contact;
