const skills = [
  {
    name: "TypeScript",
  },
  {
    name: "JavaScript",
  },
  {
    name: "Express",
  },
  {
    name: "Node.js",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "GraphQL",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "NextUI",
  },
  {
    name: "Next.js",
  },
  {
    name: "React",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Prisma",
  },
  {
    name: "Mongoose",
  },
  {
    name: "Cypress",
  },
  {
    name: "Jest",
  },
  {
    name: "Sentry",
  },
  {
    name: "Git",
  },
];

function Skills() {
  return (
    <div className="flex flex-wrap gap-5">
      {skills.map((skill, index) => {
        return (
          <div key={index} className="bg-ecru rounded-full p-3">
            <p className="font-medium">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
