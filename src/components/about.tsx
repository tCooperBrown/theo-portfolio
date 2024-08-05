import Skills from "./skills";

function About() {
  return (
    <div className="flex gap-12">
      <img src="/assets/hero/heroImage.png" className="h-2/6 w-2/6" />
      <div className="flex flex-col gap-5">
        <h1>About Me</h1>
        <p>
          Versatile full stack developer with a robust background in finance and
          technology. Graduate of Bayes Business School with a degree in
          Accounting & Finance. Leveraged my expertise as a Technology and Cyber
          internal auditor at Grant Thornton, serving financial services
          clients.
        </p>
        <h2>My Skills</h2>
        <Skills />
      </div>
    </div>
  );
}

export default About;
