import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tic Tac Toe Game",
    description: "A classic Tic Tac Toe game built with React.",
    image: "/projects/project1.png",
    tags: ["React", "Vite", "CSS"],
    demoUrl: "https://tic-tac-toe-lovat-xi-76.vercel.app/",
    githubUrl: "https://github.com/Peglo98/TicTacToe",
  },
  {
    id: 2,
    title: "Investment Calculator",
    description:
      "A simple investment calculator built with React and Vite, deployed on Vercel.",
    image: "/projects/project2.png",
    tags: ["React", "Vite", "CSS"],
    demoUrl: "https://investment-calculator-ruby-eight.vercel.app/",
    githubUrl: "https://github.com/Peglo98/Investment-Calculator",
  },
  {
    id: 3,
    title: "React Demo App",
    description:
      "A simple demonstration React application built with Vite and deployed on Vercel.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "CSS"],
    demoUrl: "https://react-demo-app-xi.vercel.app/",
    githubUrl: "https://github.com/Peglo98/React-Demo-App/",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
        "Expense Tracker is a full-stack web application for tracking incomes and expenses, built with a client–server architecture.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "MongoDB", "Express", "Node.js", "Docker"],
    githubUrl: "https://github.com/Peglo98/Expense-Tracker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. As I'm still learning all of those projects focuses on important concepts in React. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Peglo98"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
