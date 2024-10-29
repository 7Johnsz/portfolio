"use client"

import React from "react"
import Link from "next/link"
import { FolderOpenDot, HomeIcon } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Dock, DockIcon } from "@/components/ui/dock"
import ModeToggle from "@/components/ui/mode-toggle"

const DATA = {
  navbar: [{ href: "#", icon: HomeIcon, label: "Inicio" }],
  about: {
    projects: {
      name: "Projetos",
      url: "#",
      icon: FolderOpenDot,
    }
  },
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
}

export default function Navbar() {
  return (
    <div className="pt-[3rem] pb-[6rem] flex h-[5rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg fixed">
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
                        buttonVariants({ variant: "ghost", size: "icon"}))}>
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-popover text-popover-foreground">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full py-2" />

            {Object.entries(DATA.about).map(([name, about]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={about.url}
                      aria-label={about.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon"}))}>
                      <about.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-popover text-popover-foreground">
                    <p>{name}</p>
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
                        buttonVariants({ variant: "ghost", size: "icon"}))}>
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="bg-popover text-popover-foreground">
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full py-2" />
            
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent className="bg-popover text-popover-foreground">
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  )
}