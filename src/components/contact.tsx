const contact = [
  {
    url: "mailto:trcb98@gmail.com",
    imageSrc: "/assets/contact/email.png",
    title: "Email",
  },
  {
    url: "https://linkedin.com/in/theo-cooper-brown",
    imageSrc: "/assets/contact/linkedIn.png",
    title: "LinkedIn",
  },
  {
    url: "https://github.com/tCooperBrown",
    imageSrc: "/assets/contact/github.png",
    title: "Github",
  },
];

function ContactMe() {
  return (
    <div className="mt-10">
      <h1 className="text-center mb-8">Contact Me</h1>
      <div className="flex gap-40 justify-center">
        {contact.map((contact, index) => (
          <a href={contact.url} key={index} target="_blank">
            <img
              src={contact.imageSrc}
              alt={`${contact.title} Icon`}
              className="h-24"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
