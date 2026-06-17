import { educationAndCertifications } from '@/data/portfolioData';
import { Award } from 'lucide-react';

export default function Credentials() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">Education</h3>
        {educationAndCertifications.education.map((edu, i) => (
          <div key={i} className="space-y-1 relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full">
            <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
            <p className="text-sm text-slate-400">{edu.institution}</p>
            <div className="flex gap-4 text-xs font-mono text-cyan-400 pt-1">
              <span>{edu.timeline}</span>
              <span>•</span>
              <span>{edu.metric}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">Certifications</h3>
        <ul className="space-y-3">
          {educationAndCertifications.certifications.map((cert, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
              <Award className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}