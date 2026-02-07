import { getTranslations } from "next-intl/server";
import {
  Github,
  Linkedin,
} from "lucide-react";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Background } from "@/components/background";
import { Box } from "@/components/ui/box";
import { Navigation } from "@/components/navigation";
import Image from "next/image";
import { Map, MapMarker, MarkerContent } from "@/components/ui/map";
import { SpotifyCard } from "@/components/spotify-card";

const HeartHandIcon = () => (
  <svg height="1em" width="1em" className="opacity-50" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>heart hand</title>
    <g fill="#737373">
      <path d="M6.074 10.969L5.549 9.84899C5.143 8.98099 5.14 7.98499 5.539 7.11499C5.937 6.24599 6.698 5.59799 7.624 5.33799C7.898 5.26099 8.181 5.22199 8.465 5.22199C9.598 5.22199 10.657 5.83499 11.271 6.80899C11.71 5.98999 12.001 5.058 12.001 4.008C12.008 2.085 10.447 0.510993 8.508 0.498993C7.668 0.509993 6.871 0.818996 6.251 1.355C5.63 0.818996 4.83 0.508993 3.98 0.498993C2.055 0.510993 0.494 2.08499 0.501 4.00499C0.501 7.87899 4.379 10.202 5.567 10.822C5.727 10.905 5.9 10.948 6.074 10.969Z" fill="#737373" />
      <path d="M16.554 10.604C15.565 9.84798 13.332 9.68199 11.231 10.181L10.12 7.81799C9.74901 7.02899 8.86801 6.54698 8.02901 6.78298C6.96101 7.08298 6.45701 8.24998 6.90701 9.21298L9.05401 13.789L7.38401 13.482C6.65501 13.348 5.87201 13.631 5.49601 14.27C5.19701 14.779 5.17101 15.373 5.41301 15.89C5.60801 16.308 5.95601 16.624 6.39301 16.782L8.50201 17.525C9.39701 17.84 10.339 18.001 11.288 18.001H13.905C16.54 18.001 17.827 15.642 17.696 13.721C17.585 12.083 17.201 11.1 16.552 10.605L16.554 10.604Z" fill="#737373" opacity="0.4" />
    </g>
  </svg>
);

const PulsingPoint = () => (
  <div className="relative flex h-12 w-12 items-center justify-center">
    <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-green-400 opacity-75" />
    <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.9)] border-2 border-white" />
  </div>
);

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="page relative antialiased selection:bg-brand/30">
      <Background />
      
      <div className="max-w-screen-sm mx-auto pt-24 px-6">
        <Navigation />

        {/* Hero Section */}
        <section id="hero" className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-muted-light">
              <span>{t("hero.greeting")}</span>
              <HeartHandIcon />
            </div>
            
            <h1 className="doto-font text-3xl font-bold tracking-tight">
              <span className="relative">{t("hero.name")}</span>
              {" "}
              <Link 
                target="_blank" 
                href="https://github.com/7johnsz" 
                className="group inline-flex items-center"
              >
                <span className="jetbrains-mono h-fit text-xs font-light tracking-tight text-muted-light duration-200 group-hover:text-white">
                  <span>/ </span>
                  <span className="text-xxs">@</span>
                  <span>7johnsz</span>
                </span>
              </Link>
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-muted-foreground leading-6">
              {t("hero.description1")} <span className="font-medium text-white">{t("hero.role")}</span>
              {t("hero.description2")}
              <span className="font-medium text-white"> {t("hero.fullStackApps")}</span> {t("hero.and")}
              <span className="font-medium text-white"> {t("hero.openSource")}</span>.
            </p>
          </div>

          <div className="z-20">
            <div className="max-w-sm">
              <p className="text-sm text-muted-foreground">
                {t("hero.loveBoth")} <span className="font-medium text-white">{t("hero.design")}</span> {t("hero.ampersand")} <span className="font-medium text-white">{t("hero.development")}</span>
                {t("hero.focusText")}
              </p>
            </div>

            <div className="h-[300px] w-full mt-8 relative rounded-2xl overflow-hidden border border-border/40 group">
              <Map center={[-48.3659, -21.6037]} zoom={13}>
                <MapMarker longitude={-48.3659} latitude={-21.6037}>
                  <MarkerContent>
                    <PulsingPoint />
                  </MarkerContent>
                </MapMarker>
              </Map>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mt-20">
          <div className="flex w-full justify-between relative">
            {/* Timeline Line */}
            <div className="absolute left-3 top-1 h-px w-[calc(100%-60px)] translate-y-[-0.5px] bg-border opacity-40" />

            {/* Experience Items */}
            <div className="relative flex pt-6">
              <div className="absolute left-0 top-0">
                <div className="absolute left-4 top-1 h-px w-16 bg-gradient-to-r from-brand to-transparent sm:w-24" />
                <div className="relative z-10 ml-2 h-2 w-2 rounded-full bg-brand" />
                <div className="absolute -left-0.5 -top-0.5 z-10 ml-2 h-3 w-3 animate-ping rounded-full bg-brand opacity-50" />
                <div className="absolute -left-1.5 -top-1.5 ml-2 h-5 w-5 rounded-full bg-background" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                  <div className="h-6 w-6 overflow-hidden rounded-md border flex items-center justify-center bg-zinc-900">
                    <Image src="/honda.jpeg" alt="Honda" width={20} height={20} />
                  </div>
                  <span className="text-xs font-medium sm:text-sm">Honda</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs text-white">{t("experience.itDigital")}</span>
                  <span className="jetbrains-mono text-[8px] text-muted-light">{t("experience.internship")} • Ago/24 - Now</span>
                </div>
              </div>
            </div>

            <div className="relative flex pt-6">
              <div className="absolute left-0 top-0">
                <div className="relative z-10 ml-2 h-2 w-2 rounded-full bg-border" />
                <div className="absolute -left-1.5 -top-1.5 ml-2 h-5 w-5 rounded-full bg-background" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 opacity-60">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                  <div className="h-6 w-6 overflow-hidden rounded-md border flex items-center justify-center bg-zinc-900">
                    <Image src="/ppg.png" alt="PPG" width={20} height={20} />
                  </div>
                  <span className="text-xs sm:text-sm text-white">PPG</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs text-white">{t("experience.systems")}</span>
                  <span className="jetbrains-mono text-[8px] text-muted-light">{t("experience.internship")} • Jan/24 - Ago/24</span>
                </div>
              </div>
            </div>

            <div className="relative flex pt-6">
              <div className="absolute left-0 top-0">
                <div className="relative z-10 ml-2 h-2 w-2 rounded-full bg-border" />
                <div className="absolute -left-1.5 -top-1.5 ml-2 h-5 w-5 rounded-full bg-background" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 opacity-60">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                  <div className="h-6 w-6 overflow-hidden rounded-md border flex items-center justify-center bg-zinc-900">
                    <Image src="/ppg.png" alt="PPG" width={20} height={20} />
                  </div>
                  <span className="text-xs sm:text-sm text-white">PPG</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs text-white">{t("experience.marketing")}</span>
                  <span className="jetbrains-mono text-[8px] text-muted-light">{t("experience.apprentice")} • Jun/22 - Jan/24</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section id="links" className="mt-16">
          <Box className="flex flex-col gap-4">
            <span className="text-sm text-muted-foreground">
              {t("links.title")} <span className="font-medium text-white">{t("links.linksWord")}</span> {t("links.ifYouWish")}
            </span>
            <div className="flex flex-row flex-wrap gap-3">
              <Link target="_blank" href="https://twitter.com/odevjohn">
                <Button variant="premium">
                  <span className="size-3.5 mr-1 overflow-hidden">𝕏</span>
                  Twitter
                </Button>
              </Link>
              <Link target="_blank" href="https://github.com/7johnsz">
                <Button variant="premium">
                  <Github className="size-3.5 mr-1" />
                  Github
                </Button>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/odevjohn/">
                <Button variant="premium">
                  <Linkedin className="size-3.5 mr-1" />
                  Linkedin
                </Button>
              </Link>
            </div>
            
            <div className="mt-2 text-sm text-muted-foreground flex flex-col gap-2">
              <span>{t("links.recentlyPlayed")}</span>
              <SpotifyCard />
            </div>
          </Box>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-20">
          <h2 className="figtree-font text-lg font-bold mb-6">{t("projects.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="http://cvxhub.com/" target="_blank" rel="noopener noreferrer">
              <Box className="flex flex-col gap-3 group cursor-pointer h-full">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
                  <Image 
                    src="/cvx.jpg" 
                    alt="CVx" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">CVx</h3>
                    <div className="flex items-center gap-1 text-[10px] text-muted-light font-jetbrains-mono">
                      <span className="flex items-center gap-0.5">
                        {t("projects.saas")}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t("projects.cvx.description")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Next.js</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">ARQ</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Python</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Docker</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Stripe</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Redis</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">PostgreSQL</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">FastAPI</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Pydantic</span>
                </div>
              </Box>
            </Link>

            <Link href="https://myrecall.dev/" target="_blank" rel="noopener noreferrer">
              <Box className="flex flex-col gap-3 group cursor-pointer h-full">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                    <span className="text-zinc-700 font-bold text-lg tracking-widest uppercase">Recall</span>
                  </div>
                  <Image src="/recall.png" alt="Recall" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">Recall</h3>
                    <div className="flex items-center gap-1 text-[10px] text-muted-light font-jetbrains-mono">
                      <span className="flex items-center gap-0.5">
                        {t("projects.saas")}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t("projects.recall.description")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Python</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">SRT</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Pydantic</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">PostgreSQL</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Redis</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Docker</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">FastAPI</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">NextJS</span>
                </div>
              </Box>
            </Link>

            <Link href="http://zenvya.com.br/" target="_blank" rel="noopener noreferrer">
              <Box className="flex flex-col gap-3 group cursor-pointer h-full">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
                  <Image src="/zenvya.png" alt="Zenvya" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">Zenvya</h3>
                    <div className="flex items-center gap-1 text-[10px] text-muted-light font-jetbrains-mono">
                      <span className="flex items-center gap-0.5">
                        {t("projects.saas")}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t("projects.zenvya.description")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">FastAPI</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Next.js</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Pydantic</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">LangChain</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">PostgreSQL</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Docker</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Redis</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Alembic</span>  
                </div>
              </Box>
            </Link>

            <Link href="https://github.com/7Johnsz/Uber-FoodTrucks" target="_blank" rel="noopener noreferrer">
              <Box className="flex flex-col gap-3 group cursor-pointer h-full">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                     <Image src="/uber.svg" alt="Uber FoodTruck" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/10 to-transparent opacity-50" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">Uber FoodTruck</h3>
                    <div className="flex items-center gap-1 text-[10px] text-muted-light font-jetbrains-mono">
                      <span className="flex items-center gap-0.5">
                        {t("projects.challenge")}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t("projects.uberFoodtruck.description")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Python</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Pydantic</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Redis</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">PyTest</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/5 text-[9px] text-zinc-400">Uvicorn</span>
                </div>
              </Box>
            </Link>
          </div>        </section>

        {/* GitHub Calendar Section */}
        <section className="mt-20">
          <Box className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="size-4 text-muted-light" />
                <span className="text-sm font-medium">{t("github.title")}</span>
              </div>
              <span className="text-xxs text-muted-light font-jetbrains-mono">@7johnsz</span>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1 justify-between">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-1 shrink-0">
                    {Array.from({ length: 7 }).map((_, j) => {
                      const opacity = Math.random() > 0.6 ? (Math.random() > 0.5 ? 'bg-brand' : 'bg-brand/40') : 'bg-zinc-800/40';
                      return (
                        <div 
                          key={j} 
                          className={cn("w-[7px] h-[7px] sm:w-2 sm:h-2 rounded-[1px]", opacity)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[10px] text-muted-light">
                <span>{t("github.learnHow")}</span>
                <div className="flex items-center gap-1">
                  <span>{t("github.less")}</span>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 rounded-[1px] bg-zinc-800/40" />
                    <div className="w-2 h-2 rounded-[1px] bg-brand/20" />
                    <div className="w-2 h-2 rounded-[1px] bg-brand/40" />
                    <div className="w-2 h-2 rounded-[1px] bg-brand/70" />
                    <div className="w-2 h-2 rounded-[1px] bg-brand" />
                  </div>
                  <span>{t("github.more")}</span>
                </div>
              </div>
            </div>
          </Box>
        </section>

        <section className="mt-20 pb-20">
          <p className="text-xxs text-muted-light font-jetbrains-mono text-center opacity-50">
            {t("footer.copyright")}
          </p>
        </section>
      </div>

    </main>
  );
}
