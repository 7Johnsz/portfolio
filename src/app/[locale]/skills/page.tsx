import { getTranslations } from "next-intl/server";
import {
  ArrowLeft,
} from "lucide-react";
import { Link } from "@/lib/navigation";
import { Background } from "@/components/background";
import { Navigation } from "@/components/navigation";
import Icon from "tech-stack-icons";
import { Icon as IconifyIcon } from "@iconify/react";
import Image from "next/image";

interface Skill {
    name: string;
    icon: string;
    source?: "iconify" | "image";
}

const SkillBadge = ({ skill, className }: { skill: Skill, className?: string }) => (
    <div className={`inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors border border-white/10 hover:border-brand/40 py-1.5 px-2.5 gap-2 bg-white/5 text-[11px] text-zinc-300 hover:text-brand duration-200 group/badge ${className}`}>
        <div className="size-3.5 flex-shrink-0 flex items-center justify-center">
            {skill.source === "iconify" ? (
                <IconifyIcon icon={skill.icon} className="size-full" />
            ) : skill.source === "image" ? (
                <Image src={skill.icon} alt={skill.name} width={14} height={14} className="size-full object-contain" />
            ) : (
                <Icon name={skill.icon} />
            )}
        </div>
        <span>{skill.name}</span>
    </div>
);

export default async function SkillsPage() {
  const t = await getTranslations("SkillsPage");

  const narrativeStack: Skill[] = [
    { name: "Python", icon: "python" },
    { name: "Next.js", icon: "nextjs2" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "FastAPI", icon: "logos:fastapi-icon", source: "iconify" },
    { name: "PostgreSQL", icon: "postgresql" },
  ];

  const skillCategories = [
    {
      title: t("categories.core"),
      skills: [
        { name: "Python", icon: "python" },
        { name: "NextJS", icon: "nextjs2" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "js" },
      ] as Skill[],
    },
    {
      title: t("categories.frameworks"),
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs2" },
        { name: "FastAPI", icon: "logos:fastapi-icon", source: "iconify" },
        { name: "Playwright", icon: "playwright" },
      ] as Skill[],
    },
    {
        title: t("categories.storage"),
        skills: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "SQLite", icon: "/sqlite.png", source: "image" },
          { name: "Redis", icon: "redis" },
        ] as Skill[],
    },
    {
      title: t("categories.aiTools"),
      skills: [
        { name: "Ollama", icon: "/ollama.png", source: "image" },
        { name: "Hugging Face", icon: "huggingface" },
      ] as Skill[],
    },
    {
      title: t("categories.devOps"),
      skills: [
        { name: "GitHub Actions", icon: "/github.jpg", source: "image" },
        { name: "GitLab", icon: "gitlab" },
      ] as Skill[],
    },
    {
      title: t("categories.tools"),
      skills: [
        { name: "Postman", icon: "postman" },
        { name: "Insomnia", icon: "insomnia" },
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "Linux", icon: "linux" },
      ] as Skill[],
    },
    {
      title: t("categories.cloud"),
      skills: [
        { name: "AWS EC2", icon: "logos:aws-ec2", source: "iconify" },
        { name: "AWS S3", icon: "logos:aws-s3", source: "iconify" },
        { name: "AWS Bedrock", icon: "bedrock" },
        { name: "AWS Lambda", icon: "logos:aws-lambda", source: "iconify" },
        { name: "CloudFlare", icon: "cloudflare" },
      ] as Skill[],
    },
  ];

  return (
    <main className="page relative antialiased selection:bg-brand/30">
      <Background />
      
      <div className="max-w-screen-sm mx-auto pt-24 pb-32 px-6">
        <Navigation />

        {/* Header Section */}
        <section className="flex flex-col gap-8 mb-16">
            <Link href="/" className="group flex items-center gap-2 text-xs text-muted-light duration-200 hover:text-white w-fit">
                <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" />
                <span>{t("backToHome")}</span>
            </Link>

            <div className="flex flex-col gap-6">
                <h1 className="doto-font text-2xl font-bold tracking-tight uppercase flex items-baseline gap-3">
                    <span className="relative">{t("title")}</span>
                    <span className="jetbrains-mono text-[10px] font-light tracking-tighter text-muted-light leading-none lowercase">
                        {t("subtitle")}
                    </span>
                </h1>

                <div className="text-sm text-muted-foreground leading-relaxed">
                    {t("techStackIntro")}{" "}
                    {narrativeStack.map((s, idx) => (
                        <span key={idx} className="inline-flex items-center">
                            <SkillBadge skill={s} className="mx-1 h-[22px]" />
                            {idx === narrativeStack.length - 2 ? ` ${t("and")} ` : idx < narrativeStack.length - 1 ? ", " : ""}
                        </span>
                    ))}
                    {t("ideText")}{" "}
                    <SkillBadge skill={{ name: "VSCode", icon: "vscode" }} className="mx-1 h-[22px]" />
                    {" "}{t("ideEnd")}
                </div>
            </div>
        </section>

        {/* Categories Grid */}
        <div className="flex flex-col gap-10">
            {skillCategories.map((category, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                        <span className="carrois-gothic-sc text-xs text-muted-foreground/50 duration-200 uppercase">
                            &lt;{category.title}/&gt;
                        </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                            <SkillBadge key={sIdx} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>

    </main>
  );
}
