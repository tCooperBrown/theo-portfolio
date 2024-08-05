const experiencePoints = [
  {
    duration: "2023 - present",
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
    duration: "2022 - 2023",
    company: "Grant Thornton UK LLP",
    title: "Technology & Cyber Internal Auditor (FS BRS)",
    headline:
      "A dynamic app development agency specialising in React and Next.js",
    bullets: [
      "Comprehensive Client Engagement: Conducted fieldwork for traditional and tailored assessments, enhancing client security through Azure Cloud Adoption Framework adequacy reviews, cybersecurity-oriented KRI evaluations, and ransomware mitigation strategies.",
      "Client Environment Adaptation: Tailored audit methodologies to effectively assess cloud-first, on-premise, and hybrid environments,leading to comprehensive and relevant audit outcomes.",
      "Leadership in Multi-Cloud Reviews: Directed fieldwork for clients with complex multi-cloud configurations, optimising audit processes for environments with separate cloud providers for identity federation and Data Lake usage.",
    ],
  },
];
function Cv() {
  return (
    <div className="flex">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiencePoints.map((item, index) => {
          return (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.duration}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.company}
              </h3>
              <h2>{item.headline}</h2>
              <p className="mb-4 ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <ul>
                  {item.bullets.map((bullet, index) => {
                    const [boldPart, ...rest] = bullet.split(":");
                    return (
                      <li key={index} className="list-disc">
                        <strong>{boldPart}:</strong>
                        {rest.join(":")}
                      </li>
                    );
                  })}
                </ul>
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Cv;
