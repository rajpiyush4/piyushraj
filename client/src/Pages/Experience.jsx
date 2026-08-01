function Experience() {
    const jobs = [
        {
            id: 1,
            role: "Software Engineer",
            company: "Global FPO",
            location: "Delhi, India",
            period: "2025 — Present",
            bullets: [
                "Led frontend architecture for AI-assisted bank categorization, translating product specs into intuitive Next.js & TypeScript user flows.",
                "Built core reconciliation modules and QuickBooks data migration pipelines, focusing on seamless user-facing financial workflows.",
            ],
        },
        {
            id: 2,
            role: "Associate Software Engineer",
            company: "Mind IT Systems",
            location: "Delhi, India",
            period: "2024 — 2025",
            bullets: [
                "Designed interactive reporting and dynamic export tools to make complex financial data instantly accessible for end-users.",
                "Engineered cross-border payment top-ups and real-time Socket.io notifications to elevate user engagement and transaction reliability.",
            ],
        },
    ];

    return (
        <section className="experience">
            <div className="experience-inner">
                <h2 className="exp-heading">experience</h2>
                <div className="exp-list">
                    {jobs.map((job) => (
                        <div key={job.id} className="exp-item">
                            <div className="exp-meta">
                                <span className="exp-period">{job.period}</span>
                            </div>
                            <div className="exp-body">
                                <div className="exp-title-row">
                                    <h3 className="exp-role">{job.role}</h3>
                                    <span className="exp-company">@ {job.company} · {job.location}</span>
                                </div>
                                <ul className="exp-bullets">
                                    {job.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
