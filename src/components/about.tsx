import Skills from "./skills";

function About() {
  return (
    <div className="flex">
      <img src="/assets/hero/heroImage.png" className="h-2/6 w-2/6" />
      <div className="flex flex-col gap-5">
        <h2>About Me</h2>
        <h1>Theo Cooper-Brown</h1>
        <p>
          Hello! I'm Theo Cooper-Brown. Web developer, Bayes Business School
          Accounting & Finance alumnus, and former Grant Thornton Cyber &
          Technology Internal Auditor.
        </p>
        <h2>My Skills</h2>
        <Skills />
      </div>
    </div>
  );
}

export default About;
