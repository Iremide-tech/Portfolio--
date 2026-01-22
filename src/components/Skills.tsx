import React from "react";

const skills = [
  { name: "TypeScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "CSS / Tailwind", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <p className="text-gray-600 mb-8">A selection of technologies and proficiencies.</p>

      <div className="space-y-6">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{s.name}</span>
              <span className="text-sm text-gray-500">{s.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-black h-3 rounded-full"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
