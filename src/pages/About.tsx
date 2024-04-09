import Mitch from "../assets/images/about/Mitch-resized.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";

const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="laptop:flex mx-10 laptop:mx-20 laptop:my-[14%] desktop:my-[4%] flex flex-col items-center"
		>
			<div className="about-container flex space-between items-center flex-col tablet:flex-row">
				<div className="text-container flex flex-col justify-center gap-6 w-full laptop:w-1/2 aspect-square text-sm ">
					<TypeAnimation
						sequence={[
							"Hi, I'm Mitch",
							1000,
							"I'm a Forensic Investigator",
							1000,
							"Loving father of one",
							1000,
							"And a budding photographer",
							1000,
						]}
						className=""
						wrapper="span"
						speed={50}
						style={{
							fontSize: "1.2rem", // Default font size
							...(window.innerWidth > 600 && {
								fontSize: "1.8rem",
							}), // Media query for viewport width 600px - 1200px
							...(window.innerWidth > 1200 && {
								fontSize: "2rem",
							}), // Media query for viewport width > 1200px
							width: "100%",

							display: "block",
							wordBreak: "break-all",
							fontWeight: "600",
						}}
						repeat={Infinity}
					/>
					<motion.p
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={transition1}
						className="ml-[20%] text-justify"
					>
						My journey into photography began unexpectedly during my
						university days, where a forensics module introduced me
						to the captivating challenge of capturing images in
						complete darkness. Though the passion simmered for a
						while, it reignited during a trip to Exmouth in 2018.
						Armed with a modest Nikon Coolpix B500 and an Adobe
						Lightroom subscription, I found myself immersed in the
						enchanting world of landscape photography.
					</motion.p>
					<motion.p
						initial={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "-100%" }}
						transition={transition1}
						className="text-center mr-[20%] text-justify"
					>
						As my enthusiasm grew, so did my skills. Through
						relentless self-teaching and tireless practice, I delved
						into the intricacies of landscape photography, devouring
						books and tutorials to master every aspect. This journey
						of self-discovery led me to explore diverse genres, from
						wildlife to portraits, weddings, and events, each
						offering new challenges and opportunities for creative
						expression.
					</motion.p>
					<motion.p
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={transition1}
						className="ml-[20%] text-justify"
					>
						Today, my passion for photography continues to evolve
						and thrive. Sharing my work through albums and offering
						photography services for weddings and events allows me
						to connect with others who appreciate my vision. My
						journey stands as a testament to the transformative
						power of pursuing one's passions, reminding me of the
						boundless possibilities that await when one follows
						their heart.
					</motion.p>
				</div>
				<div className="pic-container tablet:w-1/2 items-center flex justify-start tablet:justify-center mt-10 tablet:mt-0  overflow-hidden">
					<img
						src={Mitch}
						className="object-cover w-[50%] hover:scale-110 transition-all duration-500"
						alt=""
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
