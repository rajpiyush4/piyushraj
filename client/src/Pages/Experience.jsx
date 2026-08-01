function Experience() {
    const jobs = [
        {
            id: 1,
            role: "Software Engineer",
            company: "Global FPO",
            location: "Delhi, India",
            period: "2025 — Present",
            bullets: [
                "Architected AI-powered accounting workflows, leveraging LLM integration to streamline bookkeeping processes.",
                "Designed a scalable AI-assisted bank categorisation engine with structured outputs to automate transaction naming.",
                "Engineered core modules for Bank Register, List, and Reconciliation — prioritising state consistency and low-latency rendering.",
                "Built robust data ingestion pipelines for migrating financial records from legacy platforms across complex schema mappings.",
            ],
        },
        {
            id: 2,
            role: "Associate Software Engineer",
            company: "Mind IT Systems",
            location: "Delhi, India",
            period: "2024 — 2025",
            bullets: [
                "Engineered interactive reporting modules, optimising data accessibility for end-users.",
                "Designed a flexible data export engine, reducing engineering overhead via dynamic schema selection.",
                "Integrated international top-up services, managing complex transaction states and API error handling for cross-border payments.",
                "Optimised real-time notification systems using Socket.io to enhance event-driven collaboration.",
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
