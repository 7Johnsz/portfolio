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
      <Navbar/>

      <section className="flex-col w-[65%] flex pl-[12rem] pr-[12rem] gap-[1.5rem]">
        <div>
          <div className="flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-40 pb-[20rem] pt-8 md:pb-60">
            <Globe className="top-[7rem]"/>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
          
          <div className="flex justify-center mt-[9rem] border rounded-lg text-center bg-primary/10 text-primary p-[.5rem]">
            <h1>Seja bem vindo ao meu mundo!</h1>
          </div>
        </div>
        
        <div className="flex gap-[1.5rem] items-center">
          <div>
            <Image
            src={Me}
            alt="Me"
            width={250}
            className="rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-[2.2rem]">Olá, eu sou o João Victor 👋</h1>
            <p>19 anos, Desenvolvedor & Designer UX/UI. Apaixonado quando
            se trata a promover soluções inovadoras para problemas reais.</p>
          </div>
        </div>

        <div className="flex flex-col w-[100%] gap-4">

          <div>
            <div className="flex justify-center w-full">
              <h1 className="flex justify-center w-[15%] bg-primary rounded p-1 text-primary-foreground mb-5">Projetos</h1>

            </div>            
          </div>
        
        <section className="w-full">
          <Works />

        </section>
        {/* 
          <div className="flex w-full justify-center mt-2">
            <Button asChild className="w-[20%]">
              <Link href="/works">Mais projetos</Link>
            </Button>
          </div> */}


          
        </div>
      </section>
      
    </main>
  );
} 
