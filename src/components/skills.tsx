const skills = [
  {
    name: 'TypeScript',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'Express',
  },
  {
    name: 'Node.js',
  },
  {
    name: 'PostgreSQL',
  },
  {
    name: 'GraphQL',
  },
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'NextUI',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'React',
  },
  {
    name: 'MongoDB',
  },
  {
    name: 'Prisma',
  },
  {
    name: 'Mongoose',
  },
  {
    name: 'Cypress',
  },
  {
    name: 'Jest',
  },
  {
    name: 'Sentry',
  },
  {
    name: 'Git',
  },
];

function Skills() {
  return (
    <div className="mb-16">
      <h2 className="font-black text-4xl mb-5" id="skills">
        Skills
      </h2>
      <div className="flex flex-wrap gap-5">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="bg-ecru rounded-md p-4">
              <p className="font-medium">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
