import { personalInfo } from '@/data/portfolioData';

export default function Contact() {
  return (
    <section className="pt-8 border-t border-slate-800 text-center space-y-4">
      <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
      <p className="text-sm text-slate-400 max-w-md mx-auto">
        Let's collaborate on software security, machine learning models, or full-stack web platforms.
      </p>
      <div className="pt-2">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="text-sm font-mono text-cyan-400 hover:underline"
        >
          {personalInfo.email}
        </a>
      </div>
      <p className="text-xs text-slate-600 pt-8">
        &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.
      </p>
    </section>
  );
}
