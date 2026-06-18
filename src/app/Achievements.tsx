const achievements = [
  { value: "3", label: "Years experience" },
  { value: "5000+", label: "Enterprise users served - FAP App" },
  { value: "65000+", label: "Enterprise users served - HRMS App" },
  { value: "14+", label: "Reusable components built" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-[100px] pr-0 sm:pr-6 ">
      <div className="reveal-card grid gap-3 rounded-xl border border-slate-800 bg-[#0f172a]/80 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.label}
            className="rounded-lg border border-slate-800 bg-slate-950/30 p-4"
          >
            <div className="text-2xl font-bold text-slate-100">
              {achievement.value}
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-lighttext">
              {achievement.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
