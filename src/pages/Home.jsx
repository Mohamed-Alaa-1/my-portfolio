import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Code, Briefcase, Mail, Linkedin, Smartphone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { skills, certifications } from '../data/skills';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-300 font-sans selection:bg-navy-700 selection:text-teal-300">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-xl font-bold text-teal-400 tracking-tight border border-teal-400 p-2 rounded-md hover:bg-teal-400/10 transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                MA
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Projects', 'Skills'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-sm font-mono text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <span className="text-teal-400 mr-1">0{index + 1}.</span>{item}
                </button>
              ))}
              <a 
                href="/Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-mono text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-teal-400 font-mono mb-5 tracking-wide text-lg">Hi, my name is</p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-100 mb-6 tracking-tight">
            Mohamed Alaa.
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-400 mb-8 tracking-tight leading-tight">
            Engineering Intelligent Systems.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-12">
            I'm a Computer Engineer specializing in <span className="text-teal-300">Federated Learning</span>, <span className="text-teal-300">Embedded Systems</span>, and <span className="text-teal-300">Full-Stack Development</span>. 
            I build scalable, privacy-preserving AI architectures and robust hardware-software integrations.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-4 border border-teal-400 text-teal-400 font-mono rounded hover:bg-teal-400/10 transition-colors">
              Check out my work!
            </button>
            <div className="flex space-x-6">
              <a href="https://github.com/Mohamed-Alaa-1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors transform hover:-translate-y-1"><Github size={24} /></a>
              <a href="https://linkedin.com/in/mohamed-alaa-806a5a266" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors transform hover:-translate-y-1"><Linkedin size={24} /></a>
              <a href="mailto:mohamed.alaa2985@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors transform hover:-translate-y-1"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-teal-400 font-mono text-xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-navy-700 flex-grow ml-6 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate-400 leading-relaxed text-lg space-y-6">
            <p>
              Hello! My name is Mohamed and I enjoy creating things that live on the internet and in the physical world. My interest in engineering started back in university when I decided to bridge the gap between software intelligence and hardware reality.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at <span className="text-teal-300">a railway mobility giant</span>, <span className="text-teal-300">a government ICT ministry</span>, and strictly in academia as a <span className="text-teal-300">Teaching Assistant</span>.
            </p>
            <p>
              I recently graduated with a B.E. in Electrical & Computer Engineering from <span className="text-teal-300">Nile University</span> (GPA 3.7). My main focus these days is building privacy-preserving Federated Learning frameworks like <strong>AuraViT-FL</strong>.
            </p>
          </div>
          <div className="relative group">
             <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
             <div className="relative bg-navy-700 rounded overflow-hidden aspect-square flex items-center justify-center">
                <img 
                  src="/mypic.jpeg" 
                  alt="Mohamed Alaa" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
         <div className="flex items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-teal-400 font-mono text-xl mr-2">02.</span> Where I've Worked
          </h2>
          <div className="h-px bg-navy-700 flex-grow ml-6 max-w-xs"></div>
        </div>

        <div className="space-y-12 border-l-2 border-navy-700 ml-3 pl-8">
          {experience.map((job, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-navy-900 rounded-full border-2 border-teal-400 group-hover:bg-teal-400 transition-colors"></div>
              <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
              <p className="text-teal-400 font-mono text-sm mb-2">{job.company} <span className="text-slate-500">|</span> <span className="text-slate-400">{job.date}</span></p>
              <p className="text-slate-400 max-w-2xl">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-teal-400 font-mono text-xl mr-2">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-navy-700 flex-grow ml-6 max-w-xs"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="bg-navy-800 rounded-lg p-7 hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-2xl border border-transparent hover:border-teal-400/30 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-teal-400 p-2 bg-navy-900 rounded-lg">
                  <project.icon className="w-8 h-8" />
                </div>
                <div className="flex space-x-4">
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  <Link to={`/project/${project.id}`} className="text-slate-400 hover:text-teal-400 transition-colors">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
                <Link to={`/project/${project.id}`}>{project.title}</Link>
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-4 flex-grow">
                {project.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-navy-700/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-teal-400/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills & Education Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
         <div className="flex items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-teal-400 font-mono text-xl mr-2">04.</span> Skills & Education
          </h2>
          <div className="h-px bg-navy-700 flex-grow ml-6 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Skills */}
           <div>
              <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center">
                <Code className="text-teal-400 mr-2" /> Technical Proficiency
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-mono text-teal-400 mb-3 uppercase tracking-wider border-b border-navy-700 pb-1 w-max">
                      {category.replace('_', ' ')}
                    </h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {items.map(skill => (
                        <div key={skill} className="flex items-center text-slate-400 text-sm">
                           <span className="text-teal-400 mr-2">▹</span> {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
           </div>

           {/* Education & Certs */}
           <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center">
                  <BookOpen className="text-teal-400 mr-2" /> Education
                </h3>
                <div className="bg-navy-800 p-6 rounded-lg border-l-4 border-teal-400 shadow-xl hover:bg-navy-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-100">B.E. in Electrical & Computer Engineering</h4>
                  </div>
                  <p className="text-teal-400 font-mono text-sm mb-1">Nile University</p>
                  <div className="flex justify-between text-sm text-slate-400 mb-4">
                    <span>Sept 2021 – Jan 2026</span>
                    <span className="text-slate-300 font-semibold">GPA: 3.7</span>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Honors</p>
                  <p className="text-sm text-slate-400">Dean's Honors List (Nov 2023)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center">
                  <FileText className="text-teal-400 mr-2" /> Certifications
                </h3>
                <ul className="space-y-4">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-sm">
                      <span className="text-teal-400 mr-2 mt-1">▹</span> {cert}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-12 text-center">
        <h2 className="text-4xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:mohamed.alaa2985@gmail.com" className="px-8 py-4 border border-teal-400 text-teal-400 font-mono rounded hover:bg-teal-400/10 transition-colors inline-block mb-12">
          Say Hello
        </a>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com/Mohamed-Alaa-1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={22} /></a>
          <a href="https://linkedin.com/in/mohamed-alaa-806a5a266" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Linkedin size={22} /></a>
        </div>
      </footer>

    </div>
  );
};

export default Home;