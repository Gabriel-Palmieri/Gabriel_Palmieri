import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Link
          href={project.link}
          key={project.id}
          className="group relative bg-[#1a123b] rounded-xl p-6 hover:scale-105 transition-all duration-300"
          style={{
            animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
            opacity: 0
          }}
        >
          {/* Imagem do projeto */}
          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a123b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Conteúdo */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white group-hover:text-[#8A6FE8] transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 line-clamp-2">
              {project.description}
            </p>

            {/* Tecnologias usadas */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-[#8A6FE8]/10 text-[#8A6FE8] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Ícone de seta */}
          <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#8A6FE8]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-4 h-4 text-[#8A6FE8] transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
} 