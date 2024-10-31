"use client"

import React from "react"
import Link from "next/link"
import { FolderOpenDot, HomeIcon } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { useMotionValue } from "framer-motion"

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
  navbar: [{ href: "#home", icon: HomeIcon, label: "Inicio" }],
  about: {
    Projetos: {
      name: "Projetos",
      url: "#projects",
      icon: FolderOpenDot,
    },
  },
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/7johnsz",
        icon: GitHubLogoIcon,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joaovictorjohn/",
        icon: LinkedInLogoIcon,
      },
    },
  },
}

export default function Navbar() {
  const mouseX = useMotionValue(0)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Only handle internal links that start with #
    if (!href.startsWith("#")) return
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <div className="pt-[3rem] pb-[6rem] flex h-[5rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg fixed z-40 top-0 left-0 right-0">
      <div>
        <TooltipProvider>
          <Dock direction="middle">
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label} mouseX={mouseX}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" })
                      )}
                    >
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
              <DockIcon key={name} mouseX={mouseX}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={about.url}
                      aria-label={about.name}
                      onClick={(e) => scrollToSection(e, about.url)}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" })
                      )}
                    >
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
              <DockIcon key={name} mouseX={mouseX}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" })
                      )}
                    >
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

            <DockIcon mouseX={mouseX}>
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