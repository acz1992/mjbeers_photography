import Mitch from "../assets/images/about/Mitch-resized.jpg";
import { TypeAnimation } from "react-type-animation";

const About = () => {
	return (
		<section className="laptop:flex mx-10 laptop:mx-20 laptop:my-[14%] flex flex-col items-center">
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
						className="bg-opacity-0 mb-2"
						wrapper="span"
						speed={50}
						style={{
							fontSize: "2rem",
							display: "inline-block",
						}}
						repeat={Infinity}
					/>
					<p className="ml-[20%] text-justify">
						My journey into photography began unexpectedly during my
						university days, where a forensics module introduced me
						to the captivating challenge of capturing images in
						complete darkness. Though the passion simmered for a
						while, it reignited during a trip to Exmouth in 2018.
						Armed with a modest Nikon Coolpix B500 and an Adobe
						Lightroom subscription, I found myself immersed in the
						enchanting world of landscape photography.
					</p>
					<p className="text-center mr-[20%] text-justify">
						As my enthusiasm grew, so did my skills. Through
						relentless self-teaching and tireless practice, I delved
						into the intricacies of landscape photography, devouring
						books and tutorials to master every aspect. This journey
						of self-discovery led me to explore diverse genres, from
						wildlife to portraits, weddings, and events, each
						offering new challenges and opportunities for creative
						expression.
					</p>
					<p className="ml-[20%] text-justify">
						Today, my passion for photography continues to evolve
						and thrive. Sharing my work through albums and offering
						photography services for weddings and events allows me
						to connect with others who appreciate my vision. My
						journey stands as a testament to the transformative
						power of pursuing one's passions, reminding me of the
						boundless possibilities that await when one follows
						their heart.
					</p>
				</div>
				<div className="pic-container tablet:w-1/2 items-center flex justify-start tablet:justify-center mt-10 tablet:mt-0  overflow-hidden">
					<img
						src={Mitch}
						className="object-cover w-[50%] hover:scale-110 transition-all duration-500"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
