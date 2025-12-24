import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Terminal, Cpu, Database, Activity, Code2, Server, Eye } from 'lucide-react';

const projects = [
  {
    title: "AuraVIT",
    description: "A professional Federated Learning framework for medical image segmentation (LungSeg). Features custom Lightweight & Stable AuraViT models and supports Federated Ensemble & Transfer Learning.",
    tags: ["Python", "PyTorch", "Federated Learning", "Medical AI"],
    link: "https://github.com/Mohamed-Alaa-1/AuraVIT",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "ESP32 AI Monitor",
    description: "Advanced IoT safety system using ESP32 and Gemini API. Monitors fire, gas, and temperature, generating real-time human-readable safety reports via Generative AI.",
    tags: ["C++", "IoT", "Gemini API", "Embedded Systems"],
    link: "https://github.com/Mohamed-Alaa-1/Embedded-AI-Environmental-Monitoring-System",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "F1 Predictor V2",
    description: "Modular ML system for predicting Formula 1 race outcomes. Uses Gradient Boosting Regressors trained on track-specific historical data fetched via FastF1 API.",
    tags: ["Python", "Scikit-Learn", "Data Science", "ML"],
    link: "https://github.com/Mohamed-Alaa-1/f1-predictor",
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: "NIDS Federated Learning",
    description: "Comparative study of Centralized vs. Federated Learning for Network Intrusion Detection Systems. Evaluates DNN, LSTM, and RF models on UNSW-NB15 datasets.",
    tags: ["Python", "PyTorch", "Cybersecurity", "Research"],
    link: "https://github.com/Mohamed-Alaa-1/Federated-Learning-for-Network-Intrusion-Detection",
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Global Health Trends",
    description: "Data analysis tool investigating correlations between sugar consumption, gym habits, and health outcomes like diabetes and obesity using global panel data.",
    tags: ["Python", "Pandas", "Data Visualization", "Analytics"],
    link: "https://github.com/Mohamed-Alaa-1/Global-Health-Lifestyle-Trends-Analysis",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Attendance System",
    description: "Desktop application for automated student attendance tracking using real-time facial recognition and webcam feed processing.",
    tags: ["Python", "OpenCV", "Computer Vision", "Tkinter"],
    link: "https://github.com/Mohamed-Alaa-1/taking-attendance-using-face-recognition",
    icon: <Eye className="w-6 h-6" />
  },
  {
    title: "MIPS DSP Processor",
    description: "Verilog implementation of a MIPS single-cycle CPU extended with a dedicated DSP unit for signal processing tasks. Simulated in Xilinx Vivado.",
    tags: ["Verilog", "FPGA", "Hardware Design", "Computer Arch"],
    link: "https://github.com/Mohamed-Alaa-1/mips-single-cycle-with-dsp-unit",
    icon: <Code2 className="w-6 h-6" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-300 font-sans selection:bg-navy-700 selection:text-teal-300">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-100 tracking-tight">Mohamed Alaa</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Mohamed-Alaa-1" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
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
          <h2 className="text-teal-400 font-medium mb-4 tracking-wide">Hi, my name is</h2>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Mohamed Alaa.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
            I build things for the web & devices.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on Federated Learning, Embedded AI, and Full-stack development.
          </p>
          <a href="#projects" className="inline-block px-8 py-4 border border-teal-400 text-teal-400 font-medium rounded hover:bg-teal-400/10 transition-colors">
            Check out my work
          </a>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-teal-400 mr-2">01.</span> Some Things I've Built
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
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-navy-800 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 group shadow-xl border border-transparent hover:border-teal-900/30"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-teal-400">
                  {project.icon}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed h-24 overflow-hidden">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-teal-400/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 text-sm">
        <a href="https://github.com/Mohamed-Alaa-1" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
          Designed & Built by Mohamed Alaa
        </a>
      </footer>

    </div>
  );
}

export default App;