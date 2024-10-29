import Navbar from "@/components/navbar";
import Globe from "@/components/ui/globe";
import Image from "next/image";
import Me from "@/public/me.jpeg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Works from "@/components/works";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>


      <section className="flex-col w-full max-w-7xl lg:px-[14rem] px-4 sm:px-6 flex gap-8 sm:gap-12 md:gap-16">
        <div className="relative flex flex-col mt-[12rem]">
          <div className="flex size-full max-w-lg mx-auto items-center justify-center overflow-hidden rounded-lg bg-background px-4 sm:px-8 md:px-12 pb-40 sm:pb-48 md:pb-60 pt-8">
            <Globe className="absolute top-1/4 transform -translate-y-1/2" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
          
          <div className="flex justify-center">
            <div className="w-[80%] border rounded-lg text-center bg-primary/10 text-primary p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg">
              <h1>Seja bem vindo ao meu mundo!</h1>
            </div>
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
          <div className="text-center sm:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] tracking-tight mb-3">Olá, eu sou o João Victor! 👋</h1>
            <p className="tracking-tight text-sm sm:text-base md:text-lg">
              19 anos, Desenvolvedor & Designer UX/UI. Apaixonado quando
              se trata a promover soluções inovadoras para problemas reais.
            </p>
          </div>
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
            <Button asChild className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3">
              <Link href="/works">Veja mais projetos</Link>
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}