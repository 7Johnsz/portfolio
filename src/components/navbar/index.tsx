"use client";

import React from "react";
import Link from "next/link";
import { CalendarIcon, Code, CodeIcon, FolderOpenDot, Github, HomeIcon, Linkedin, LinkedinIcon, MailIcon, PencilIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { CodeSandboxLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Inicio" },
    { href: "#", icon: FolderOpenDot, label: "Projetos" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: GitHubLogoIcon,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInLogoIcon,
      },
    },
  },
};

export default function Navbar() {
  return (
    <div className="pt-[3rem] pb-[6rem] relative flex h-[5rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-900">
      <div className="">
        <TooltipProvider>
          <Dock direction="middle">
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full bg-gray-900 text-white"
                      )}
                    >
                      <item.icon className="size-4 text-white" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full bg-gray-900 text-white"
                      )}
                    >
                      <social.icon className="size-4 text-white" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white">
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
    </div>

  );
}
