import cogoImage from "../assets/projects/cogo.jpg";
import subtrackdImage from "../assets/projects/subtrackd.jpg";
import zoneHopperImage from "../assets/projects/ZoneHopper1.png";

const portolioItems = [
  {
    title: "ZoneHopper",
    description:
      "An app that gamifies the exploration of London by encouraging users to visit trending venues on their chosen tube line.",
    image: zoneHopperImage,
    technologies: [
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
  {
    title: "Cogo",
    description:
      "Group travel app for collaborative planning, voting on options, and shared expense management with a virtual payment card.",
    image: cogoImage,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextUI",
      "Figma",
      "NextAuth.js",
      "OAuth",
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
    title: "Subtrackd",
    description:
      "A subscription management platform providing granular tracking, spending insights, and payment notifications.",
    image: subtrackdImage,
    technologies: [
      "React + Vite",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "NextUI",
      "Figma",
      "Clerk",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Express.js",
      "Vitest",
      "Jest",
      "React Testing Library",
    ],
  },
];

function Portfolio() {
  return (
    <div className="mb-16">
      <h2 className="font-black text-4xl mb-5" id="work">
        Work
      </h2>
      <div className="flex max-sm:flex-col max-sm:items-center sm:justify-between gap-10">
        {portolioItems.map((item, index) => (
          <div className="sm:w-1/3" key={index}>
            <img
              src={item.image}
              className="rounded-lg bg-cover sm:mx-auto mb-5"
            />
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {item.technologies &&
                item.technologies.map((technology, index) => (
                  <div key={index} className="bg-ecru w-fit p-2 rounded-lg">
                    {technology}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
