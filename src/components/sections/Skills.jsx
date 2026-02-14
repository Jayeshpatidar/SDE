import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import { FaJava, FaServer, FaSpinner, FaTools } from "react-icons/fa";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAngular,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "React", icon: FaReact },
  { name: "jQuery", icon: SiJavascript },
  { name: "AJAX", icon: FaSpinner },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "Express", icon: SiExpress },
  { name: "NodeJS", icon: FaNodeJs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Git", icon: FaGitAlt },
  { name: "Github", icon: DiGithubAlt },
  { name: "Postman", icon: SiPostman },
  { name: "MongoDB", icon: DiMongodb },
  { name: "SQL", icon: BiLogoPostgresql },
  { name: "Java", icon: FaJava },
  { name: "Angular", icon: SiAngular },
  { name: "Bug Solving", icon: FaTools },
  { name: "API Integration", icon: FaServer },
  { name: "Figma to HTML", icon: SiFigma },
];

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        Technologies I Use.
      </h4>
      {/* =========== LIST OF SKILLS =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <span
              key={index}
              className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
            >
              <Icon className="text-2xl" />
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
