import { projectsData } from '@/data/portfolioData';
import { Folder, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">Featured Engineering Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <div key={idx} className="group relative flex flex-col justify-between p-6 bg-slate-900/50 rounded-xl border border-slate-800/80 hover:border-slate-700 transition duration-300 backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-4">
                <Folder className="w-6 h-6 text-cyan-500" />
                <div className="flex items-center gap-3">
                  {project.badge && (
                    <span className="text-xs font-semibold px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded border border-amber-500/20">
                      {project.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition underline decoration-slate-700 hover:decoration-cyan-400">
                      Source Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                {project.title}
              </h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 bg-slate-800/80 text-slate-300 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
