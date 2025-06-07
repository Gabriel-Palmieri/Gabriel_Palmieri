'use client';

import { useEffect, useState } from 'react';
import { AboutMe } from './components/AboutMe';
import { TechIcons } from './components/TechIcons';
import { ProjectCard } from './components/ProjectCard';
import { Competencias } from './components/Competencias';
import { HeroIllustration } from './components/HeroIllustration';
import { Navbar } from './components/Navbar';
import { motion } from 'framer-motion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Dados das competências
  const competencias = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" fill="currentColor"/>
        </svg>
      ),
      titulo: "Desenvolvimento Frontend",
      descricao: "Criação de interfaces modernas e responsivas com foco na experiência do usuário.",
      habilidades: [
        "React.js e Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 e CSS3",
        "Design Responsivo"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
        </svg>
      ),
      titulo: "Desenvolvimento Backend",
      descricao: "Construção de APIs robustas e escaláveis com boas práticas de desenvolvimento.",
      habilidades: [
        "Node.js",
        "Express",
        "APIs RESTful",
        "Bancos de Dados SQL",
        "Arquitetura MVC"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      titulo: "DevOps e Ferramentas",
      descricao: "Experiência com ferramentas e práticas modernas de desenvolvimento e deploy.",
      habilidades: [
        "Git e GitHub",
        "Docker",
        "CI/CD",
        "AWS",
        "Linux"
      ]
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const gradientAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <main className="relative bg-[#0B0B0F] min-h-screen text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Gradiente principal animado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#1a123b]/20 to-[#0B0B0F] animate-gradient" />
        
        {/* Círculos de luz */}
        <div className="absolute top-20 left-[20%] w-[500px] h-[500px] bg-[#8A6FE8]/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-40 right-[10%] w-[400px] h-[400px] bg-[#4A3AFF]/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
        
        {/* Novos círculos animados */}
        <div className="absolute top-[60%] left-[5%] w-[300px] h-[300px] bg-[#8A6FE8]/5 rounded-full blur-[80px] animate-float" />
        <div className="absolute top-[10%] right-[15%] w-[250px] h-[250px] bg-[#4A3AFF]/5 rounded-full blur-[60px] animate-float-reverse" />
        
        {/* Grid de pontos */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(90deg,#8A6FE820_1px,transparent_1px),linear-gradient(0deg,#8A6FE820_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Linhas flutuantes */}
        <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#8A6FE8]/20 to-transparent animate-slide-right" />
        <div className="absolute right-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-[#4A3AFF]/20 to-transparent animate-slide-left" />
        
        {/* Novas linhas diagonais */}
        <div className="absolute -left-1/4 top-0 w-[150%] h-px bg-gradient-to-r from-transparent via-[#8A6FE8]/10 to-transparent rotate-[30deg] animate-slide-right-slow" />
        <div className="absolute -right-1/4 bottom-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-[#4A3AFF]/10 to-transparent -rotate-[30deg] animate-slide-left-slow" />
        
        {/* Partículas brilhantes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8A6FE8]/30 rounded-full animate-twinkle" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#4A3AFF]/30 rounded-full animate-twinkle delay-1000" />
        <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-[#8A6FE8]/30 rounded-full animate-twinkle delay-2000" />
      </div>
      
      <Navbar />

      {/* Hero Section com fundo próprio */}
      <section id="home" className="relative min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            variants={gradientAnimation}
            initial="hidden"
            animate="show"
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(circle at 50% 50%, #8A6FE815 0%, transparent 60%)',
              filter: 'blur(40px)'
            }} 
          />
          <motion.div 
            variants={gradientAnimation}
            initial="hidden"
            animate="show"
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(circle at 70% 30%, #4A3AFF10 0%, transparent 50%)',
              filter: 'blur(40px)'
            }}
          />
      </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={itemAnimation}>
              <h1 className="text-4xl md:text-7xl font-bold mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-block"
                >
                  Full-Stack
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-[#8A6FE8] inline-block ml-2"
                >
                  Developer
                </motion.span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemAnimation}
              className="text-gray-400 text-xl max-w-lg"
            >
              Cada linha de código é uma oportunidade de transformar ideias em impacto real — e é essa transformação que me move todos os dias.
            </motion.p>

            <motion.div 
              variants={itemAnimation}
              className="flex flex-wrap gap-4"
            >
              {["ReactJS", "Javascript", "NodeJs", "Tailwind"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, color: "#8A6FE8" }}
                  className="px-4 py-2 bg-[#1a123b] rounded-lg text-gray-300 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              className="flex flex-wrap gap-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-[#8A6FE8] text-white rounded-lg transition-all duration-200 ease-out hover:bg-[#7559D1] hover:shadow-lg hover:shadow-[#8A6FE8]/20"
              >
                Ver Projetos
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-transparent border-2 border-[#8A6FE8] text-[#8A6FE8] rounded-lg transition-all duration-200 ease-out hover:bg-[#8A6FE8]/10 hover:shadow-lg hover:shadow-[#8A6FE8]/20"
              >
                Contato
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full h-[600px] md:h-[800px]"
          >
            <motion.div
              animate={{ y: [-10, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
              className="w-full h-full"
            >
              <HeroIllustration />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outras seções com background mais suave */}
      <div className="relative z-10">
        {/* About Section */}
        <section id="about" className="py-20 px-8 bg-[#0B0B0F]/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <AboutMe
              name="Gabriel Palmieri"
              role="Desenvolvedor Full-Stack"
              description="Especializado em React, Next.js e TypeScript no front-end, com foco em criar interfaces modernas, performáticas e acessíveis. No back-end, tenho experiência sólida com Node.js, Express, bancos de dados relacionais (PostgreSQL, MySQL), além de boas práticas em APIs REST e autenticação segura. Também atuo com integração de sistemas, versionamento com Git e deploys. Minha motivação vem da vontade de resolver problemas reais através da tecnologia. Acredito que um bom sistema deve ser não apenas funcional, mas também agradável e acessível para todos. Gosto de aprender constantemente, colaborar em equipe e transformar ideias em produtos digitais que fazem a diferença."
              photoUrl="/me.png"
            />
        </div>
      </section>

        {/* Technologies Section com fundo mais escuro */}
        <section id="tech" className="relative py-20 px-8">
          <div className="absolute inset-0 bg-[#1a123b]/10 backdrop-blur-sm" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Tecnologias</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ferramentas e tecnologias que utilizo para criar soluções modernas e eficientes
              </p>
            </motion.div>
            <TechIcons />
        </div>
      </section>

        {/* Competências Section */}
        <section id="competencias" className="py-20 px-8 bg-[#0B0B0F]/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Competências</h2>
            <Competencias competencias={competencias} />
        </div>
      </section>

        {/* Projects Section com fundo especial */}
        <section id="projects" className="relative py-20 px-4 sm:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a123b]/20 to-transparent" />
          <div className="container mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Projetos
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
              <ProjectCard
                title="Thornfield"
                description="Site elegante para uma marca premium de whisky, apresentando uma experiência imersiva com design sofisticado. Desenvolvido com foco na história da destilaria, processo de fabricação e catálogo de produtos."
                image="/assets/thornfield.png"
                technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'Flowbite React', 'Firebase', 'Node.js']}
                githubUrl="https://github.com/Guimenn/Thornfield-a"
                liveUrl="https://thornfield-a.vercel.app"
              />
              <ProjectCard
                title="Rimac - Concessionária Digital"
                description="Este projeto apresenta um site dinâmico sobre a Rimac, desenvolvido com HTML, CSS e JavaScript. Com visual moderno e navegação intuitiva, ele explora a trajetória da marca, seus supercarros elétricos revolucionários e o espírito inovador que a tornou referência no setor automotivo."
                image="/assets/rimac.png"
                technologies={['HTML', 'CSS', 'JavaScript']}
                githubUrl="https://github.com/Guimenn/Rimac"
                liveUrl="https://guimenn.github.io/Rimac"
              />
              <ProjectCard
                title="Saldo Verde"
                description="Saldo Verde é uma aplicação web desenvolvida com o objetivo de ajudar usuários a gerenciar suas finanças pessoais de forma simples, intuitiva e organizada. Com um foco especial na educação financeira, o sistema permite que qualquer pessoa controle receitas, despesas, metas financeiras e categorias personalizadas, visualizando seus hábitos através de gráficos interativos e análises."
                image="/assets/saldo.png"
                technologies={['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL']}
                githubUrl="https://github.com/palmitex/Saldo_Verde"
                liveUrl="https://projeto-financias.vercel.app/"
              />
              <ProjectCard
                title="NeoBank - Banco Digital"
                description="Este projeto apresenta um site de banco digital moderno, desenvolvido com HTML, CSS e JavaScript. Com uma interface intuitiva e funcionalidades essenciais, ele oferece uma experiência de usuário agradável e segura para gerenciar finanças pessoais e bancárias."
                image="/assets/neobank.jpeg"
                technologies={['HTML', 'CSS', 'JavaScript', 'PHP']}
                githubUrl="https://github.com/palmitex/NeoBank"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 px-8">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a123b]/30 to-[#0B0B0F]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8A6FE8]/10 via-transparent to-transparent" />
            </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
              </p>
            </motion.div>

            <ContactForm />
        </div>
      </section>

        <Footer />
        </div>
    </main>
  );
}
