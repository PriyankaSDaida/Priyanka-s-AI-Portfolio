import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SKILLS_DATA } from '../constants';
import { SectionId } from '../types';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A balanced skillset spanning frontend aesthetics, backend logic, and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="h-[400px] w-full bg-slate-900/30 rounded-2xl border border-slate-800 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#818cf8"
                  strokeWidth={2}
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Text List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-3">Frontend Development</h3>
              <p className="text-slate-300 leading-relaxed">
                Specializing in React ecosystem (Next.js, Vite) with deep knowledge of state management and responsive design principles using Tailwind CSS.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Backend & Cloud</h3>
              <p className="text-slate-300 leading-relaxed">
                Building robust APIs with Node.js and Python. Experienced in deploying scalable containerized applications on AWS using Docker and Kubernetes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">AI Engineering</h3>
              <p className="text-slate-300 leading-relaxed">
                Integrating LLMs like Gemini into web applications for enhanced user interactions, semantic search, and automated content generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
