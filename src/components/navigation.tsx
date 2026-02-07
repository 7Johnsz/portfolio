"use client";

import {
  House,
  Briefcase,
  Send,
  Code2,
} from "lucide-react";
import { Link, usePathname } from "@/lib/navigation";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/ui/dock";
import { useLocale, useTranslations } from "next-intl";

export function Navigation() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  
  const otherLocale = locale === "pt" ? "en" : "pt";
  const flagSrc = locale === "pt" ? "/brazil-flag.png" : "/usa-flag.png";
  const flagAlt = locale === "pt" ? "Brazil Flag" : "USA Flag";

  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] sm:bottom-8">
        <Dock className="bg-black/60 backdrop-blur-md border-border/50 rounded-full h-fit py-2.5 px-6 gap-8 items-center border">
          <Link href="/">
            <DockIcon label={t("home")} className="bg-transparent border-none size-auto hover:bg-transparent transition-none">
              <div className="flex flex-col items-center justify-center gap-0.5 group/nav">
                <House className="size-[18px] text-zinc-500 group-hover/nav:text-white duration-200" />
                <span className="text-[10px] font-medium text-zinc-500 group-hover/nav:text-white duration-200">{t("home")}</span>
              </div>
            </DockIcon>
          </Link>
          <Link href="/experience">
            <DockIcon label={t("work")} className="bg-transparent border-none size-auto hover:bg-transparent transition-none">
              <div className="flex flex-col items-center justify-center gap-0.5 group/nav">
                <Briefcase className="size-[18px] text-zinc-500 group-hover/nav:text-white duration-200" />
                <span className="text-[10px] font-medium text-zinc-500 group-hover/nav:text-white duration-200">{t("work")}</span>
              </div>
            </DockIcon>
          </Link>
          
          <Link href={pathname} locale={otherLocale}>
            <DockIcon label={t("language")} className="bg-transparent border-none size-auto hover:bg-transparent transition-none">
              <div className="flex flex-col items-center justify-center gap-0.5 group/nav">
                <Image 
                  src={flagSrc} 
                  alt={flagAlt} 
                  width={20} 
                  height={15} 
                  className="rounded-sm opacity-50 group-hover/nav:opacity-100 transition-opacity duration-200" 
                />
                <span className="text-[10px] font-medium text-zinc-500 group-hover/nav:text-white duration-200 uppercase">{t("language")}</span>
              </div>
            </DockIcon>
          </Link>

          <Link href="/skills">
            <DockIcon label={t("skills")} className="bg-transparent border-none size-auto hover:bg-transparent transition-none">
              <div className="flex flex-col items-center justify-center gap-0.5 group/nav">
                <Code2 className="size-[18px] text-zinc-500 group-hover/nav:text-white duration-200" />
                <span className="text-[10px] font-medium text-zinc-500 group-hover/nav:text-white duration-200">{t("skills")}</span>
              </div>
            </DockIcon>
          </Link>
          <Link href="mailto:contato.joaovictor99@gmail.com">
            <DockIcon label={t("contact")} className="bg-transparent border-none size-auto hover:bg-transparent transition-none">
              <div className="flex flex-col items-center justify-center gap-0.5 group/nav">
                <Send className="size-[18px] text-zinc-500 group-hover/nav:text-white duration-200" />
                <span className="text-[10px] font-medium text-zinc-500 group-hover/nav:text-white duration-200">{t("contact")}</span>
              </div>
            </DockIcon>
          </Link>
        </Dock>
      </div>
      
      {/* Tailwind-only Progressive Blur */}
      <div 
        className="pointer-events-none fixed bottom-0 left-0 right-0 h-40 z-[90] bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-xl [mask-image:linear-gradient(to_top,black_40%,transparent_100%)]" 
      />
    </>
  );
}
