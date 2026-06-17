import { personalInfo } from '@/data/portfolioData';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-12 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
        <MapPin className="w-3 h-3" /> Palakkad, Kerala
      </div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>.
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-slate-300">
        {personalInfo.title}
      </h2>
      <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
        {personalInfo.subheading}
      </p>
      
      <div className="flex flex-wrap items-center gap-6 pt-4">
        <a 
          href={personalInfo.resumeLink} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2.5 rounded-lg border border-slate-700 transition"
        >
          View Resume <ArrowUpRight className="w-4 h-4" />
        </a>
        
        <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition" aria-label="Email">
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}