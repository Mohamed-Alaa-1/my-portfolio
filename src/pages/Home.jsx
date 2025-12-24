import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, BookOpen, Code, Cpu, Award, Briefcase, Mail, Linkedin, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

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
      <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-100 tracking-tight">Mohamed Alaa</span>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={() => scrollToSection('projects')} className="text-sm font-mono text-slate-300 hover:text-teal-400 transition-colors">01. Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-mono text-slate-300 hover:text-teal-400 transition-colors">02. About</button>
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center px-4 py-2 text-sm font-medium text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 transition-colors"
              >
                Experience
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-teal-400 font-mono mb-4 tracking-wide">Hi, my name is</h2>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Mohamed Alaa.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-slate-400 mb-8 tracking-tight leading-tight">
            Engineering the future of Intelligent Systems.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
            I am a results-driven Computer Engineering student at Nile University with a strong foundation in 
            <strong className="text-teal-300"> networking</strong>, <strong className="text-teal-300">automation</strong>, 
            and <strong className="text-teal-300">intelligent transportation solutions</strong>.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="px-8 py-4 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors">
              View My Projects
            </a>
            <div className="flex space-x-4">
              <a href="https://github.com/Mohamed-Alaa-1" target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={24} /></a>
              <a href="https://linkedin.com/in/mohamed-alaa-806a5a266" target="_blank" className="text-slate-400 hover:text-teal-400 transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-teal-400 font-mono text-xl mr-2">01.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-navy-700 flex-grow ml-6"></div>
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
              className="bg-navy-800 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 group shadow-xl border border-transparent hover:border-teal-900/30 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-teal-400">
                  <project.icon className="w-8 h-8" />
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <Link to={`/project/${project.id}`} className="text-slate-400 hover:text-teal-400 transition-colors">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
                <Link to={`/project/${project.id}`}>{project.title}</Link>
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto">
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

      {/* About & Experience Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-teal-400 font-mono text-xl mr-2">02.</span> About & Experience
          </h2>
          <div className="h-px bg-navy-700 flex-grow ml-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Professional Summary */}
            <div className="prose prose-invert prose-lg text-slate-400">
              <p>
                My work bridges the gap between hardware and software, from designing custom 
                <strong className="text-teal-300"> MIPS processors</strong> in Verilog to deploying 
                <strong className="text-teal-300"> Federated Learning</strong> models for medical imaging. 
                I love solving complex problems that require a holistic understanding of the computing stack.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-slate-100 flex items-center">
                <Briefcase className="text-teal-400 mr-3" size={20} /> Work Experience
              </h3>
              
              <div className="space-y-8 border-l-2 border-navy-700 ml-3 pl-8">
                {[
                  {
                    role: "Railway Engineering Intern",
                    company: "Alstom Mobility",
                    date: "Aug 2024 – Sep 2024",
                    desc: "Hands-on experience with Automatic Train Control (ATC) and Supervision (ATS) for railway automation. Assisted in train maintenance and diagnostics."
                  },
                  {
                    role: "Cybersecurity Trainee",
                    company: "Ministry of ICT",
                    date: "Jul 2024 – Aug 2024",
                    desc: "Knowledge in network security, data center management, and network troubleshooting protocols."
                  },
                  {
                    role: "Undergraduate Teaching Assistant",
                    company: "Nile University",
                    date: "Nov 2022 – May 2024",
                    desc: "Assisted students in C++, Python, Electric Circuits, and Engineering Drawing."
                  }
                ].map((job, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-teal-400 rounded-full border-4 border-navy-900"></div>
                    <h4 className="text-lg font-bold text-slate-100">{job.role}</h4>
                    <p className="text-teal-400 text-sm mb-2">{job.company} | <span className="text-slate-400">{job.date}</span></p>
                    <p className="text-sm text-slate-400 leading-relaxed">{job.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center">
                <BookOpen className="text-teal-400 mr-3" size={20} /> Education
              </h3>
              <div className="bg-navy-800 p-6 rounded-lg border border-navy-700 shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-slate-100">Bachelor of Engineering in Electrical & Computer Engineering</h4>
                  <span className="text-teal-400 font-mono text-sm">GPA: 3.7</span>
                </div>
                <p className="text-slate-300">Nile University</p>
                <p className="text-slate-500 text-sm mb-4">Sept 2021 – June 2026</p>
                <p className="text-sm text-slate-400 italic">Honors: Dean's Honors List (Nov 2023)</p>
              </div>
            </div>

          </div>

          {/* Sidebar: Skills & Contact */}
          <div className="space-y-8">
            <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center">
                <Code className="text-teal-400 mr-2" size={18} /> Technical Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono text-teal-400 mb-3 uppercase tracking-wider">Programming</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C++', 'C', 'Java', 'MATLAB'].map(s => (
                      <span key={s} className="px-2 py-1 bg-navy-900 text-slate-300 text-xs rounded border border-navy-700">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono text-teal-400 mb-3 uppercase tracking-wider">Hardware & Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {['Arduino', 'ESP32', 'Vivado', 'Cadence', 'LTspice', 'TensorFlow', 'PyTorch'].map(s => (
                      <span key={s} className="px-2 py-1 bg-navy-900 text-slate-300 text-xs rounded border border-navy-700">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono text-teal-400 mb-3 uppercase tracking-wider">Certifications</p>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400">• Cisco CCNA</p>
                    <p className="text-xs text-slate-400">• Linux Essentials</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-800 p-6 rounded-lg border border-navy-700">
               <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center">
                Contact
              </h3>
              <div className="space-y-4 text-sm text-slate-400">
                <a href="mailto:mohamed.alaa2985@gmail.com" className="flex items-center hover:text-teal-400 transition-colors">
                  <Mail size={16} className="mr-3" /> mohamed.alaa2985@gmail.com
                </a>
                <div className="flex items-center">
                  <Smartphone size={16} className="mr-3" /> 01200709954
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-navy-800 text-center">
        <div className="flex justify-center space-x-6 mb-4 text-slate-400">
          <a href="https://github.com/Mohamed-Alaa-1" target="_blank" className="hover:text-teal-400"><Github size={20} /></a>
          <a href="https://linkedin.com/in/mohamed-alaa-806a5a266" target="_blank" className="hover:text-teal-400"><Linkedin size={20} /></a>
        </div>
        <p className="text-slate-500 text-xs font-mono">
          Designed & Built by Mohamed Alaa Abdelhamed
        </p>
      </footer>

    </div>
  );
};

export default Home;