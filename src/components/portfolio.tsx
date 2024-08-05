const projects = [
  {
    name: "Cogo",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextUI",
      "NextAuth.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Cheerio",
      "Weavr",
      "Cypress",
      "Sentry",
    ],
  },
  {
    name: "Subtrackd",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "NextUI",
      "Clerk",
      "MongoDB",
      "Mongoose",
      "Express.js",
    ],
  },
  {
    name: "ZoneHopper",
    stack: [
      "React Native",
      "Expo",
      "Zustand",
      "MongoDB",
      "Mongoose",
      "Express.js",
      "geolib",
      "Google Places API",
      "TFL API",
    ],
  },
];

function Portfolio() {
  return (
    <div>
      <h1 className="mb-5">My Work</h1>
      <div className="flex justify-between">
        <div className="max-w-96 bg-celadon rounded-lg p-5 flex flex-col gap-5">
          <img
            src="/assets/projects/cogo.jpg"
            className="w-96 rounded-lg mx-auto"
          />
          <h2>Cogo</h2>
          <p>
            Group travel app for collaborative planning, voting on options, and
            shared expense management with a virtual payment card.
          </p>
          <h2>Tech Stack:</h2>
          <div className="flex flex-wrap gap-3">
            {projects[0].stack.map((tech, index) => {
              return (
                <div key={index} className="bg-ecru rounded-full p-2">
                  <p>{tech}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-96 bg-celadon rounded-lg p-5 flex flex-col gap-5">
          <img
            src="/assets/projects/subtrackd.jpg"
            className="w-96 rounded-lg mx-auto"
          />
          <h2>Subtrackd</h2>
          <p>
            A subscription management platform providing granular tracking,
            spending insights, and payment notifications.
          </p>
          <h2>Tech Stack:</h2>
          <div className="flex flex-wrap gap-3">
            {projects[1].stack.map((tech, index) => {
              return (
                <div key={index} className="bg-ecru rounded-full p-2">
                  <p>{tech}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-96 bg-celadon rounded-lg p-5 flex flex-col gap-5">
          <img
            src="/assets/projects/ZoneHopper1.png"
            className="w-96 rounded-lg mx-auto"
          />
          <h2>ZoneHopper</h2>
          <p>
            An app that gamifies the exploration of London by encouraging users
            to visit trending venues on their chosen tube line.
          </p>
          <h2>Tech Stack:</h2>
          <div className="flex flex-wrap gap-3">
            {projects[1].stack.map((tech, index) => {
              return (
                <div key={index} className="bg-ecru rounded-full p-2">
                  <p>{tech}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
