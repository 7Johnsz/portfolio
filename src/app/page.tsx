'use client'

import { RainbowButton } from "@/components/ui/rainbow-button"
import { motion, useScroll, useSpring } from "framer-motion"
import { Github, Mail, Linkedin } from "lucide-react"
import Timeline from "@/components/experiences"
import { useEffect, useState } from "react"
import StackIcon from "tech-stack-icons"
import Navbar from "@/components/navbar"
import Works from "@/components/works"
import Me from "@/public/me.jpeg"
import Image from "next/image"
import Link from "next/link"

import dynamic from 'next/dynamic'
import ClientOnly from '@/components/ClientOnly'
import HeroSection from '@/components/hero'

// const Globe = dynamic(() => import('@/components/ui/globe'), { ssr: false })
const VelocityScroll = dynamic(() => import('@/components/ui/scroll-based-velocity').then(mod => ({ default: mod.VelocityScroll })), { ssr: false })

export default function Home() {
  const techStack = ["python", "postgresql", "tailwindcss", "php", "nextjs2", "css3", "docker", "streamlit", "langchain", "redis"]
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      
      const win = window as Window & { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext };
      const originalAudioContext = win.AudioContext || win.webkitAudioContext;
      if (originalAudioContext) {
        (win as Window & { AudioContext?: undefined; webkitAudioContext?: undefined }).AudioContext = undefined;
        win.webkitAudioContext = undefined;
      }
    }
  }, [])

  if (!isClient) {
    return 
  }

  return (
    <main className="flex flex-col items-center">
      <ClientOnly>
        {isClient && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9999]"
            style={{ scaleX }}
          />
        )}
      </ClientOnly>
      
      <div className="w-full sticky top-0 z-40">
        <Navbar />
      </div>

      <section id="home" className="flex-col w-full max-w-7xl lg:px-[14rem] px-4 sm:px-6 flex gap-8 sm:gap-12 md:gap-16">
        <motion.div 
          className="relative flex flex-col mt-[8rem] !bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex size-full max-w-lg mx-auto items-center justify-center overflow-hidden rounded-lg px-4 sm:px-8 md:px-12 pt-4">
            <HeroSection />
          </div>
          
          <div className="relative overflow-hidden -mt-[2.8rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
            <VelocityScroll
              text="Seja bem-vindo ao meu mundo!"
              default_velocity={2}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black/20 drop-shadow-sm dark:text-white/20 md:text-7xl md:leading-[5rem]"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-48 sm:w-60 md:w-72"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={Me}
              priority
              alt="Me"
              width={250}
              height={250}
              className="rounded-full w-full h-auto"
            />
          </motion.div>
          <div className="text-center sm:text-left flex-col flex">
            <motion.h1 
              className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] tracking-tight mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              Olá, eu sou o João Victor! 👋
            </motion.h1>
            <motion.p 
              className="tracking-tight text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              20 anos, desenvolvedor back-end, graduando em sistemas de informação na Wyden UniMetrocamp. Apaixonado quando
              se trata de promover soluções inovadoras para problemas reais.
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="flex mt-6 flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 opacity-50 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
            >
              <StackIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[3rem] lg:h-[3rem]" name={tech} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.section 
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="pb-6 sm:pb-8 pt-4 sm:pt-5 flex justify-center gap-4 flex-col items-center">
            <motion.h1 
              className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              id="projects"
            >
              Meus projetos favoritos
            </motion.h1>
            <motion.h2 
              className="w-full sm:w-[90%] text-muted-foreground text-lg sm:text-xl md:text-2xl tracking-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Aqui estão algumas das minhas colaborações, projetos pessoais e desafios técnicos.
            </motion.h2>
          </div>

          <section>
            <Works />
          </section>

          <motion.div 
            className="p-4 m-4 flex w-full justify-center sm:mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RainbowButton  className="sm:w-auto px-4 py-2 sm:px-6 sm:py-3">
              <Link href="https://github.com/7johnsz" target="_blank">Veja mais projetos</Link>
            </RainbowButton>
          </motion.div>
        </motion.section>

        <motion.section 
          className="w-full justify-center items-center flex flex-col"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Experiências Profissionais
          </motion.h1>
          <Timeline />
        </motion.section>

        <motion.section 
          className="w-full justify-center items-center flex flex-col gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Contato
          </motion.h1>
          <motion.h2 
            className="w-full sm:w-[60%] text-muted-foreground text-lg sm:text-xl md:text-2xl tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Sinta-se à vontade para entrar em contato ou realizar networking!
          </motion.h2>

          <motion.div 
            className="mt-[2rem] w-full justify-center items-center flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { href: "https://www.linkedin.com/in/joaovictorjohn/", Icon: Linkedin },
              { href: "https://github.com/7Johnsz", Icon: Github },
              { href: "mailto:contato.joaovictor99@gmail.com", Icon: Mail }
            ].map(({ href, Icon }, index) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <Link href={href}>
                  <Icon className="w-[2rem] h-[2rem]" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-8 w-full justify-center items-center flex flex-col">
            <hr />
            <h1 className="font-bold tracking-tight text-muted-foreground/50 text-center">
              Desenvolvido por João Victor
            </h1>
            <p className="w-full sm:w-[60%] text-muted-foreground/60 tracking-tight text-center">
              © 2024. Todos os direitos reservados.
            </p>
          </div>
        </motion.footer>
      </section>
    </main>
  )
}