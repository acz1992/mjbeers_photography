import ContactForm from "../components/ContactForm";
import booksCameraImage from "../assets/images/contact/books-camera.jpg";

const Contact = () => {
	return (
		<section>
			<div className="flex flex-col gap-10 laptop:flex-row items-center m-auto w-72">
				<img src={booksCameraImage} className="object-cover" alt="" />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
