import { ImFacebook, ImInstagram, ImLinkedin } from "react-icons/im";

const Socials = () => {
	return (
		<div className="hidden laptop:flex">
			<ul className="flex w-full justify-between ">
				<li>
					<a
						href="https://www.facebook.com/"
						target="_blank"
						className="hover:opacity-50 transition"
					>
						<ImFacebook />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						className="hover:opacity-50 transition"
					>
						<ImInstagram />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/"
						target="_blank"
						className="hover:opacity-50 transition"
					>
						<ImLinkedin />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
