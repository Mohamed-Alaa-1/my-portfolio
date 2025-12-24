import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Layers, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-navy-900 text-slate-300 font-sans selection:bg-navy-700 selection:text-teal-300">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center text-teal-400 hover:text-teal-300 transition-colors font-mono text-sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner with Abstract Pattern */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-navy-800 overflow-hidden flex items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900 z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Banner Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <div className="mb-4 flex justify-center text-teal-400">
             <project.icon className="w-16 h-16 opacity-80" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-teal-400 font-light tracking-wide">{project.subtitle}</p>
        </motion.div>
      </div>

      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-20 relative z-30 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column (8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-8 bg-navy-800 rounded-lg p-8 shadow-2xl border border-navy-700"
          >
            <div className="flex items-center mb-8 pb-4 border-b border-navy-700">
              <Layers className="text-teal-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-slate-100">Project Overview</h2>
            </div>
            
            {/* Rich Text Content */}
            <article className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-slate-100 
              prose-h3:text-teal-300 prose-h3:text-xl prose-h3:mt-8
              prose-p:text-slate-400 prose-p:leading-relaxed
              prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-200
              prose-code:text-teal-300 prose-code:bg-navy-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-ul:marker:text-teal-400 prose-li:text-slate-400"
            >
              <ReactMarkdown>
                {project.fullContent}
              </ReactMarkdown>
            </article>

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-navy-700">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Ready to see the code?</h3>
              <div className="flex flex-wrap gap-4">
                 <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-6 py-3 bg-teal-400/10 text-teal-400 border border-teal-400 rounded hover:bg-teal-400 hover:text-navy-900 transition-all duration-300 font-medium"
                >
                  <Github size={20} className="mr-2" />
                  View Repository
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Column (4 cols) */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             className="lg:col-span-4 space-y-8"
          >
            
            {/* Project Details Card */}
            <div className="bg-navy-800 rounded-lg p-6 shadow-xl border border-navy-700">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center">
                <Tag className="text-teal-400 mr-2" size={18} />
                Project Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Type</h4>
                  <p className="text-slate-300 font-medium">Engineering / Research</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Role</h4>
                  <p className="text-slate-300 font-medium">Lead Developer / Engineer</p>
                </div>

                <div>
                   <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Technologies</h4>
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-navy-900 text-teal-400 text-xs font-mono rounded border border-navy-700">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-lg p-6 shadow-xl border border-navy-700">
               <h3 className="text-lg font-bold text-slate-100 mb-4">Explore More</h3>
               <p className="text-sm text-slate-400 mb-6">
                 Check out my other projects or get in touch to discuss this one.
               </p>
               <Link to="/" className="flex items-center text-teal-400 hover:text-white transition-colors text-sm font-medium group">
                 View All Projects <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

          </motion.div>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>&copy; 2025 Mohamed Alaa. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;