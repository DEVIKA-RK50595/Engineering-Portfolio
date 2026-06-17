'use client';

import { personalInfo, skillsData, projectsData, educationAndCertifications } from '@/data/portfolioData';
import { Mail, ExternalLink, GraduationCap, Briefcase, Award, Code, Compass, ShieldAlert } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans relative overflow-hidden">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10 space-y-28">
        
        {/* ================= HERO SECTION ================= */}
        <header className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">Devika R K</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-normal">
            {personalInfo.subheading}
          </p>
          
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold px-5 py-2.5 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/10">
              <Mail className="w-4 h-4" /> Let's Connect
            </a>
            <div className="flex items-center gap-3">
              {/* Custom SVG GitHub Icon */}
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/50 transition" aria-label="GitHub">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              {/* Custom SVG LinkedIn Icon */}
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/50 transition" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* ================= SKILLS SECTION (BENTO GRID) ================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Core Skillset
            </h2>
            <p className="text-sm text-slate-400">Technical proficiencies directly mapped from my core competencies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm relative group hover:border-slate-700 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400 mb-4 flex items-center gap-2">
                  {skillGroup.category === "Technologies" && <Code className="w-4 h-4 text-cyan-400" />}
                  {skillGroup.category === "Soft Skills" && <Compass className="w-4 h-4 text-blue-400" />}
                  {skillGroup.category === "Areas of Interest" && <ShieldAlert className="w-4 h-4 text-indigo-400" />}
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800/60 text-slate-300 group-hover:border-slate-700/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" /> Featured Engineering Architecture
            </h2>
            <p className="text-sm text-slate-400">Production-ready applications and research platforms built using scalable technology workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div key={index} className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 p-6 flex flex-col justify-between transition-all duration-300 relative group shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border shrink-0 ${
                      project.badge.includes('Winner') 
                        ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
                        : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                    }`}>
                      {project.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((techItem, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono font-medium text-slate-400 px-2 py-0.5 bg-slate-950 rounded-md border border-slate-900">
                        {techItem}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-2 text-xs font-medium text-slate-400 border-t border-slate-800/60">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg> Source Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Engine
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TIMELINE SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          
          {/* Experience Timeline */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" /> Industry Exposure
            </h2>
            <div className="relative border-l border-slate-800/80 pl-6 space-y-8">
              {educationAndCertifications.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-950 border border-cyan-400 group-hover:bg-cyan-400 transition-colors" />
                  <span className="text-[11px] font-mono font-medium text-cyan-400 tracking-wide uppercase">{exp.timeline}</span>
                  <h3 className="text-base font-bold text-white mt-1">{exp.role}</h3>
                  <h4 className="text-xs text-slate-400 font-medium">{exp.company}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light mt-2 bg-slate-900/30 p-3 rounded-xl border border-slate-800/40">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" /> Academic Dossier
            </h2>
            <div className="relative border-l border-slate-800/80 pl-6 space-y-8">
              {educationAndCertifications.education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-950 border border-blue-400 group-hover:bg-blue-400 transition-colors" />
                  <span className="text-[11px] font-mono font-medium text-blue-400 tracking-wide uppercase">{edu.timeline}</span>
                  <h3 className="text-base font-bold text-white mt-1">{edu.degree}</h3>
                  <h4 className="text-xs text-slate-400 font-medium">{edu.institution}</h4>
                  <div className="inline-block mt-2 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-blue-500/5 text-blue-400 border border-blue-500/10">
                    {edu.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATIONS LIST ================= */}
        <section className="space-y-6 border-t border-slate-800/60 pt-12">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" /> Verified Credentials & Recognitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {educationAndCertifications.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-800 transition">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                <span className="text-xs text-slate-300 leading-snug">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.</p>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition font-mono">
            {personalInfo.email}
          </a>
        </footer>

      </div>
    </div>
  );
}