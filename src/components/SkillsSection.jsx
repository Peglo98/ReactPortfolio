import { useState } from "react";
import { cn } from "@/lib/utils";
import StackIcon from "tech-stack-icons";

const skills = [
  // Frontend
  { name: "HTML/CSS",image:"html5", category: "frontend" },
  { name: "JavaScript",image:"js", category: "frontend" },
  { name: "React",image:"reactjs", category: "frontend" },
  { name: "Tailwind CSS",image:"tailwindcss", category: "frontend" },

  // Backend
  { name: "Node.js",image:"nodejs",  category: "backend" },
  { name: "MongoDB",image:"mongodb",  category: "backend" },

  // Tools
  { name: "Git/GitHub",image:"github",  category: "tools" },
  { name: "Docker",image:"docker",  category: "tools" },
  { name: "Postman",image:"postman",  category: "tools" },
  { name: "Jest",image:"jest",  category: "tools" },
  { name: "VS Code",image:"vscode",  category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
              <div
                  key={key}
                  className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg text-center"> {skill.name}</h3>
                </div>

                <div className="text-sm text-muted-foreground content-center">
                  <StackIcon className="content-center" lightmode={true} name={skill.image}/>
                </div>

              </div>
          ))}
        </div>
      </div>
    </section>
  );
};
