import { skillsData } from '@/data/portfolioData';

export default function Skills() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">Technical Core</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsData.map((category, idx) => (
          <div key={idx} className="p-5 bg-slate-900/30 rounded-xl border border-slate-800/60">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-3">{category.category}</h4>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span key={i} className="text-sm px-3 py-1 bg-slate-800/40 text-slate-300 rounded-md border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
