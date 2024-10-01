interface Project {
  name: string;
  description: string;
  bullets: string[];
  techStack?: string;
}

interface Experience {
  duration: string;
  company: string;
  title: string;
  headline: string;
  bullets: string[];
  projects?: Project[];
}

const experiencePoints: Experience[] = [
  {
    duration: "2023 — present",
    company: "TCB Tech (freelance)",
    title: "Full Stack Developer",
    headline:
      "Passionate developer focused on building engaging applications from front to back end.",
    bullets: [],
    projects: [
      {
        name: "🦘🚄 ZoneHopper",
        description:
          "An app that gamifies the exploration of London by encouraging users to visit trending venues on their chosen tube line.",
        bullets: [
          "Google Places API Integration: Integrated the Google Places API to retrieve currently trending venues near London tube stations.",
          'User Interaction Enhancement: Implemented a user-friendly "check-in" process based on calculating user GPS data proximity to each venue.',
          "Geolocation Sorting Algorithm: Developed a process to sort an array of station objects, returned by the TFL API, based on geographic proximity.",
        ],
        techStack:
          "React Native | Expo | Zustand | MongoDB | Mongoose | Express | geolib | Google Places API | TFL API",
      },
      {
        name: "💰 Subtrackd",
        description:
          "A subscription management platform providing granular tracking, spending insights, and payment notifications.",
        bullets: [
          "State Management Optimisation: Implemented Zustand for global state management, reducing prop-drilling and the number of API calls needed.",
          "OAuth Integration: Utilised Clerk as an OAuth 2.0 provider to facilitate frictionless Google Sign-In functionality.",
          "Codebase Refactoring and UI Overhaul: Refactored the existing React and Express codebase to TypeScript and implemented a UI overhaul with several feature improvements.",
        ],
        techStack:
          "React | Zustand | Tailwind CSS | NextUI | Clerk | MongoDB | Mongoose | Express",
      },
    ],
  },
  {
    duration: "2023 - 2024",
    company: "Mobcoders",
    title: "Full Stack Developer",
    headline:
      "A dynamic app development agency specialising in React and Next.js",
    bullets: [
      "Backend Development Leadership: Led backend development for key projects, utilising Express.js and Next.js serverless functions, resulting in robust and scalable applications.",
      "Performance Optimisation: Reduced load times by up to 75% through the implementation of optimistic rendering, significantly enhancing user satisfaction and engagement.",
      "Production Issue Resolution: Decreased error-resolution time by 50% through the integration of Sentry, leading to quicker identification and resolution of critical production issues.",
      "Testing and Quality Assurance: Improved application stability with 90% code coverage through comprehensive unit tests using Jest and end-to-end tests with Cypress, ensuring reliable performance across various scenarios.",
    ],
  },
  {
    duration: "2022 — 2023",
    company: "Grant Thornton UK LLP",
    title: "Technology & Cyber Internal Auditor (FS BRS)",
    headline:
      "The UK member firm of Grant Thornton International, seventh largest accounting network in the world by combined fee income.",
    bullets: [
      "Comprehensive Client Engagement: Conducted fieldwork for traditional and tailored assessments, enhancing client security through Azure Cloud Adoption Framework adequacy reviews, cybersecurity-oriented KRI evaluations, and ransomware mitigation strategies.",
      "Client Environment Adaptation: Tailored audit methodologies to effectively assess cloud-first, on-premise, and hybrid environments,leading to comprehensive and relevant audit outcomes.",
      "Leadership in Multi-Cloud Reviews: Directed fieldwork for clients with complex multi-cloud configurations, optimising audit processes for environments with separate cloud providers for identity federation and Data Lake usage.",
    ],
  },
];

function Cv() {
  return (
    <>
      <h2 className="font-black mb-5" id="experience">
        Experience
      </h2>
      <div className="flex flex-col max-sm:gap-5" id="experience">
        {experiencePoints.map((entry, index) => {
          return <ExperienceEntry key={index} experience={entry} />;
        })}
      </div>
    </>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="flex sm:gap-16 sm:hover:bg-ecru sm:hover:rounded-lg sm:p-7 max-sm:flex-col max-sm:bg-celadon max-sm:p-10 max-sm:rounded-lg">
      <p className="min-w-32 text-sm">{experience.duration}</p>
      <div>
        <p className="font-black text-2xl max-sm:text-xl">{experience.title}</p>
        <p className="text-2xl max-sm:text-xl">{experience.company}</p>
        <p className="mb-2 italic">{experience.headline}</p>
        <ol>
          {experience.bullets.map((bullet, index) => {
            const [boldPart, ...rest] = bullet.split(":");
            return (
              <li key={index} className="list-disc mb-2 list-outside">
                <span className="font-semibold">{boldPart}:</span>
                {rest.join(":")}
              </li>
            );
          })}
        </ol>
        {experience.projects && (
          <div className="mt-4">
            <p className="font-semibold text-lg">Projects:</p>
            {experience.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{project.name}</p>
                <p className="italic">{project.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {project.bullets.map((bullet, bulletIndex) => {
                    const [boldPart, ...rest] = bullet.split(":");
                    return (
                      <li key={bulletIndex} className="mb-1">
                        <span className="font-semibold">{boldPart}:</span>
                        {rest.join(":")}
                      </li>
                    );
                  })}
                </ul>
                {project.techStack && (
                  <p className="mt-2">
                    <span className="font-semibold">Tech Stack:</span>{" "}
                    {project.techStack}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cv;
