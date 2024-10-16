import emailImage from "../assets/contact/email.png";
import linkedInImage from "../assets/contact/linkedin.png";
import githubImage from "../assets/contact/github.png";

const contact = [
  {
    url: "mailto:theo.cooperbrown@gmail.com",
    imageSrc: emailImage,
    title: "Email",
  },
  {
    url: "https://linkedin.com/in/theo-cooper-brown",
    imageSrc: linkedInImage,
    title: "LinkedIn",
  },
  {
    url: "https://github.com/tCooperBrown",
    imageSrc: githubImage,
    title: "Github",
  },
];

function ContactMe() {
  return (
    <div
      className="flex w-1/2 mx-auto justify-between my-10 max-lg:w-full max-lg:px-10"
      id="contact"
    >
      {contact.map((contact, index) => (
        <a href={contact.url} key={index} target="_blank">
          <img
            src={contact.imageSrc}
            alt={`${contact.title} Icon`}
            className="h-12"
          />
        </a>
      ))}
    </div>
  );
}

export default ContactMe;
