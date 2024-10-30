import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Github, Mail, Linkedin  } from "lucide-react"
import Timeline from "@/components/experiences";
import Globe from "@/components/ui/globe";
import StackIcon from "tech-stack-icons";
import Navbar from "@/components/navbar";
import Works from "@/components/works";
import Me from "@/public/me.jpeg";
import Image from "next/image";
import Link from "next/link";
// import { LinkedinIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>

      <section className="flex-col w-full max-w-7xl lg:px-[14rem] px-4 sm:px-6 flex gap-8 sm:gap-12 md:gap-16">
        <div className="relative flex flex-col mt-[12rem] !bg-transparent">
          <div className="flex size-full max-w-lg mx-auto items-center justify-center overflow-hidden rounded-lgpx-4 sm:px-8 md:px-12 pb-40 sm:pb-48 md:pb-60 pt-8">
            <Globe className="absolute top-1/4 transform -translate-y-1/2" />
          </div>
          
          <div className="mt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
            <VelocityScroll
              text="Seja bem-vindo ao meu mundo!"
              default_velocity={2}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black/20 drop-shadow-sm dark:text-white/20 md:text-7xl md:leading-[5rem]"
            />
          </div>

        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="w-48 sm:w-60 md:w-72">
            <Image
              src={Me}
              alt="Me"
              width={250}
              height={250}
              className="rounded-full w-full h-auto"
            />
          </div>
          <div className="text-center sm:text-left flex-col flex">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] tracking-tight mb-3">Olá, eu sou o João Victor! 👋</h1>
            <p className="tracking-tight text-sm sm:text-base md:text-lg">
              19 anos, Desenvolvedor & Designer UX/UI. Apaixonado quando
              se trata a promover soluções inovadoras para problemas reais.
            </p>
          </div>
        </div>

        <div className="justify-center items-center flex gap-6 opacity-50">
          <StackIcon className="w-[3rem] h-[3rem]" name="python" />
          <StackIcon className="w-[3rem] h-[3rem]" name="nextjs2" />
          <StackIcon className="w-[3rem] h-[3rem]" name="tailwindcss" />
          <StackIcon className="w-[3rem] h-[3rem]" name="flask" />
          <StackIcon className="w-[3rem] h-[3rem]" name="php" />
          <StackIcon className="w-[3rem] h-[3rem]" name="html5" />
          <StackIcon className="w-[3rem] h-[3rem]" name="css3" />
          <StackIcon className="w-[3rem] h-[3rem]" name="figma" />
          <StackIcon className="w-[3rem] h-[3rem]" name="git" />
        </div>
        
        <section className="w-full">
          <div className="pb-6 sm:pb-8 pt-4 sm:pt-5 flex justify-center gap-4 flex-col items-center">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-center">Meus projetos favoritos</h1>
            <h2 className="w-full sm:w-[90%] text-muted-foreground text-lg sm:text-xl md:text-2xl tracking-tight text-center">
              Aqui estão alguns das minhas colaborações, projetos pessoais, desafios técnicos.
            </h2>
          </div>

          <Works />

          <div className="flex w-full justify-center sm:mt-4">
            <RainbowButton className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3">
              <Link href="/works">Veja mais projetos</Link>
            </RainbowButton>
          </div>
        </section>

        <section className="w-full justify-center items-center flex flex-col">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-center">Experiência Profissionais</h1>
          <Timeline />
        </section>

        <section className="w-full justify-center items-center flex flex-col gap-2">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-center">Contato</h1>
          <h2 className="w-full sm:w-[60%] text-muted-foreground text-lg sm:text-xl md:text-2xl tracking-tight text-center">Sinta-se à vontade para entrar em contato ou realizar um networking!</h2>
        

          <div className="mt-[2rem] w-full justify-center items-center flex gap-4">
            <Link href="https://www.linkedin.com/in/joaovictorjohn/">
              <Linkedin className="w-[2rem] h-[2rem]" />
            </Link>

            <Link href="https://github.com/7Johnsz">
              <Github className="w-[2rem] h-[2rem]" />
            </Link>

            <Link href="mailto:contato@devjohn.com.br">
              <Mail className="w-[2rem] h-[2rem]" />
            </Link>
          </div>

        </section>

        <footer>
          <div className="p-8 w-full justify-center items-center flex flex-col">
            <hr  />
            <h1 className="font-bold tracking-tight text-center">Desenvolvido por João Victor</h1>
            <p className="w-full sm:w-[60%] text-muted-foreground tracking-tight text-center">© 2024. Todos os direitos reservados.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}