'use client'

import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { motion, useScroll, useSpring } from "framer-motion"
import { Github, Mail, Linkedin } from "lucide-react"
import Timeline from "@/components/experiences"
import Globe from "@/components/ui/globe"
import StackIcon from "tech-stack-icons"
import Navbar from "@/components/navbar"
import Works from "@/components/works"
import Me from "@/public/me.jpeg"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const techStack = ["python", "nextjs2", "tailwindcss", "flask", "php", "html5", "css3", "figma", "git"]
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className="flex flex-col items-center">
      {isClient && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9999]"
          style={{ scaleX }}
        />
      )}
      
      <div className="w-full sticky top-0 z-40">
        <Navbar />
      </div>

      <section id="home" className="flex-col w-full max-w-7xl lg:px-[14rem] px-4 sm:px-6 flex gap-8 sm:gap-12 md:gap-16">
        <motion.div 
          className="relative flex flex-col mt-[12rem] !bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex size-full max-w-lg mx-auto items-center justify-center overflow-hidden rounded-lgpx-4 sm:px-8 md:px-12 pb-40 sm:pb-48 md:pb-60 pt-8">
            <div>
              <Globe className="absolute top-1/4 transform -translate-y-1/2" />
            </div>
          </div>
          
          <div className="mt-32 relative overflow-hidden">
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
              19 anos, Desenvolvedor & Designer UX/UI. Apaixonado quando
              se trata a promover soluções inovadoras para problemas reais.
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 opacity-50 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
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
              Aqui estão alguns das minhas colaborações, projetos pessoais, desafios técnicos.
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
            Experiência Profissionais
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
            Sinta-se à vontade para entrar em contato ou realizar um networking!
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
              { href: "mailto:contato@devjohn.com.br", Icon: Mail }
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