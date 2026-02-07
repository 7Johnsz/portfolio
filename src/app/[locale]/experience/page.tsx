import { getTranslations } from "next-intl/server";
import {
  ArrowLeft,
} from "lucide-react";
import { Link } from "@/lib/navigation";
import { Background } from "@/components/background";
import { Box } from "@/components/ui/box";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

export default async function ExperiencePage() {
  const t = await getTranslations("ExperiencePage");

  const experiences = [
    {
      company: "Honda",
      role: t("experiences.honda.role"),
      period: t("experiences.honda.period"),
      location: t("hybrid"),
      description: [
        t("experiences.honda.descriptions.0"),
        t("experiences.honda.descriptions.1"),
        t("experiences.honda.descriptions.2"),
        t("experiences.honda.descriptions.3"),
        t("experiences.honda.descriptions.4"),
      ],
      logo: "/honda.jpeg",
      skills: ["Python", "AWS Services", "Salesforce", "LLM", "RAG", "Streamlit", "LangChain", "FastAPI", "NextJS"],
      current: true,
    },
    {
      company: "PPG",
      role: t("experiences.ppgSystems.role"),
      period: t("experiences.ppgSystems.period"),
      location: t("hybrid"),
      description: [
        t("experiences.ppgSystems.descriptions.0"),
        t("experiences.ppgSystems.descriptions.1"),
      ],
      logo: "/ppg.png",
      skills: ["Oracle R12", "PL/SQL"],
      current: false,
    },
    {
      company: "PPG",
      role: t("experiences.ppgMarketing.role"),
      period: t("experiences.ppgMarketing.period"),
      location: t("onsite"),
      description: [
        t("experiences.ppgMarketing.descriptions.0"),
        t("experiences.ppgMarketing.descriptions.1"),
        t("experiences.ppgMarketing.descriptions.2"),
        t("experiences.ppgMarketing.descriptions.3"),
      ],
      logo: "/ppg.png",
      skills: [
        t("experiences.ppgMarketing.skills.0"),
        t("experiences.ppgMarketing.skills.1"),
        t("experiences.ppgMarketing.skills.2"),
        t("experiences.ppgMarketing.skills.3"),
      ],
      current: false,
    },
  ];

  return (
    <main className="page relative antialiased selection:bg-brand/30">
      <Background />
      
      <div className="max-w-screen-sm mx-auto pt-24 px-6">
        <Navigation />

        {/* Header */}
        <section className="flex flex-col gap-6 mb-12">
            <Link href="/" className="group flex items-center gap-2 text-xs text-muted-light duration-200 hover:text-white w-fit">
                <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" />
                <span>{t("backToHome")}</span>
            </Link>
            <div className="flex flex-col gap-2">
                <h1 className="doto-font text-3xl font-bold tracking-tight uppercase">
                    {t("title")}
                </h1>
                <p className="text-sm text-muted-foreground leading-6 max-w-md">
                    {t("subtitle")}
                </p>
            </div>
        </section>

        {/* Experience List */}
        <div className="flex flex-col gap-8 pb-32">
            {experiences.map((exp, index) => (
                <Box key={index} className="flex flex-col gap-4 group">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 overflow-hidden rounded-lg border flex items-center justify-center bg-zinc-900 flex-shrink-0">
                                <Image src={exp.logo} alt={exp.company} width={32} height={32} />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                                    {exp.current && (
                                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-light">{exp.company}</span>
                                    <span className="text-[10px] text-muted-light/60">•</span>
                                    <span className="text-[10px] text-brand/80 font-medium">{exp.location}</span>
                                </div>
                            </div>
                        </div>
                        <span className="jetbrains-mono text-[10px] text-muted-light bg-zinc-800/50 px-2 py-1 rounded">
                            {exp.period}
                        </span>
                    </div>

                    <ul className="flex flex-col gap-2 list-none">
                        {exp.description.map((item, iIdx) => (
                            <li key={iIdx} className="flex gap-2 text-xs leading-relaxed items-start">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400/20" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill, sIdx) => (
                            <span 
                                key={sIdx} 
                                className="px-2 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400 font-jetbrains-mono"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </Box>
            ))}
        </div>
      </div>

    </main>
  );
}
