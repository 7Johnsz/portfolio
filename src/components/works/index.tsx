"use client";

import { GithubIcon, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Project {
  title: string;
  period: string;
  description: string;
  media: string;
  mediaType: "video" | "img";
  technologies: string[];
  website?: string;
  github?: string;
}

export default function Component() {
  const projects: Project[] = [
    {
      title: "Respire AI",
      period: "Jun 2025 - Jun 2025",
      description: "Uma solução criada durante o 1º Hackathon da Receita Federal – 2025, com o objetivo de reaproveitar cigarros eletrônicos apreendidos e transformá-los em tecnologia útil.",
      media: "/respire.jpeg", // Corrigido para o caminho correto
      mediaType: "img",
      technologies: ["Python", "FastAPI", "LangChain", "Uvicorn", "Streamlit", "Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/7Johnsz/Respire-AI",
      website: "https://respire-alpha.vercel.app/"
    },
    {
      title: "Uber: Food Truck",
      period: "Ago 2024 - Ago 2024",
      description:
        "Uma aplicação que ajuda o usuário a localizar e a explorar Food Trucks em San Francisco, um desafio criado pela Uber.",
        media:
        "https://github.com/7Johnsz/portfolio/raw/main/src/public/foodtruck.mp4",
      mediaType: "video",
      technologies: ["FastAPI", "SQLite", "Python", "PyTest", "Uvicorn"],
      github: "https://github.com/7Johnsz/Uber-FoodTrucks",
    },
    {
      title: "PicPay Simplificado",
      period: "Mar 2024 - Mar 2024",
      description:
        "Participei do desafio técnico do PicPay, onde eu desenvolvi uma aplicação que simplifica o processo de pagamento, realizando como perfil sênior.",
      media:
        "https://github.com/7Johnsz/portfolio/raw/refs/heads/main/src/public/picpay.mp4",
      mediaType: "video",
      technologies: ["FastAPI", "SQLite", "Python", "Swagger UI", "Uvicorn"],
      github: "https://github.com/7Johnsz/PicPay-Simplificado",
    },
    {
      title: "Desenvolvedor SETI 2024",
      period: "Jul 2024 - Ago 2024",
      description:
        "Participei como representante da SETI 2024 como Desenvolvedor, Editor & Designer UX/UI. Workshop promovendo a tecnologia nas escolas, o site alcançou +20.000 visitas.",
      media:
        "https://raw.githubusercontent.com/7Johnsz/portfolio/refs/heads/main/src/public/seti.jpeg",
      mediaType: "img",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "FastAPI",
        "Figma",
        "Photoshop",
      ],
      website:
        "https://www.linkedin.com/posts/joaovictorjohn_seti2024-tecnologia-workshop-activity-7227826482927005696-XAbL?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-2 sm:p-4">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="bg-primary-foreground text-primary border-primary/20 flex flex-col"
        >
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-bold line-clamp-1">
              {project.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {project.period}
            </p>
          </CardHeader>
          <CardContent className="space-y-4 flex-grow">
            {project.mediaType === "video" ? (
              <video
                src={project.media}
                className="w-full h-32 sm:h-48 object-cover rounded-md"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                width={500}
                height={500}
                src={project.media}
                alt={`${project.title} preview`}
                className="w-full h-32 sm:h-48 object-cover rounded-md"
              />
            )}
            <p className="text-xs sm:text-sm h-16 sm:h-20 overflow-y-auto">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-xs px-1 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-start gap-2 mt-auto">
            {project.website && (
              <Button
                variant="outline"
                size="sm"
                className="text-primary border-primary/20 text-xs sm:text-sm"
              >
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Website
                </a>
              </Button>
            )}
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                className="text-primary border-primary/20 text-xs sm:text-sm"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <GithubIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Código fonte
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

