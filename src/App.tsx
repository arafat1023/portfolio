import { FC, Fragment, useEffect, useState } from "react";

import {
    caseFiles,
    CaseFile,
    EMAIL,
    GITHUB_URL,
    LINKEDIN_URL,
    openSource,
    ownProjects,
    skills,
    timeline,
} from "./content/caseFiles";

import "./case-files.css";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const formatDhakaTime = (): string => {
    try {
        const t = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Dhaka",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date());
        return `${t} (UTC+6)`;
    } catch {
        return "UTC+6";
    }
};

const useDhakaTime = (): string => {
    const [time, setTime] = useState(formatDhakaTime);
    useEffect(() => {
        const id = setInterval(() => setTime(formatDhakaTime()), 30000);
        return () => clearInterval(id);
    }, []);
    return time;
};

const Bar: FC = () => (
    <header className="bar">
        <div className="wrap">
            <a className="mark" href="#top">
                Arafat <span>Hossain</span>
            </a>
            <nav aria-label="Sections">
                <a href="#work">Work</a>
                <a href="#own">Own projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>
);

const Hero: FC = () => {
    const time = useDhakaTime();
    return (
        <div className="hero">
            <div className="wrap">
                <div>
                    <p className="eyebrow">
                        <b>Senior full-stack engineer</b> &nbsp;·&nbsp; 7+ years &nbsp;·&nbsp; Dhaka, open to remote
                        roles
                    </p>
                    <h1>
                        I take products from architecture to <em>production</em>.
                    </h1>
                    <p className="lede">
                        Node.js, TypeScript, React and Vue on the front, Python (Flask) and Node on the back, PostgreSQL
                        and MongoDB underneath. I've led a clinical MRI platform, an inventory SaaS's move to Node 24
                        and strict TypeScript, and built the APIs behind an LLM chat product serving 50,000 users.
                    </p>
                    <div className="actions">
                        <a className="btn primary" href="#work">
                            Read the case files
                        </a>
                        <a className="btn" href={GITHUB_URL} {...ext}>
                            GitHub ↗
                        </a>
                        <a className="btn" href={LINKEDIN_URL} {...ext}>
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
                <figure className="idcard">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/landing/face.jpg`}
                        alt="Arafat Hossain"
                        width={300}
                        height={300}
                    />
                    <dl>
                        <dt>Now</dt>
                        <dd>Senior SWE, Nerddevs</dd>
                        <dt>Based</dt>
                        <dd>Dhaka, Bangladesh</dd>
                        <dt>Local time</dt>
                        <dd className="live">{time}</dd>
                        <dt>Overlap</dt>
                        <dd>EU day, US mornings</dd>
                    </dl>
                </figure>
            </div>
        </div>
    );
};

const FullCase: FC<{ c: CaseFile; afterCompact: boolean }> = ({ c, afterCompact }) => (
    <article className={`case${afterCompact ? " after-compact" : ""}`} id={c.id}>
        <div className="tab">
            <span>{c.code}</span>
            <span>{c.domain}</span>
        </div>
        <div className="file">
            <div className="file-main">
                <h3>{c.title}</h3>
                <p className="role">{c.role}</p>
                <p className="sum">{c.summary}</p>
                {c.owned && (
                    <ul className="owned">
                        {c.owned.map((o) => (
                            <li key={o}>{o}</li>
                        ))}
                    </ul>
                )}
            </div>
            <aside className="file-side" aria-label={`${c.title} readout`}>
                {c.readouts && (
                    <dl className="readout">
                        {c.readouts.map((r) => (
                            <div key={r.label}>
                                <dt>{r.label}</dt>
                                <dd>
                                    {r.from && <span className="from">{r.from}</span>} {r.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                )}
                {c.ledger && (
                    <table className="ledger">
                        <tbody>
                            {c.ledger.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>
                                        {row.old && (
                                            <>
                                                <span className="old">{row.old}</span> →{" "}
                                            </>
                                        )}
                                        <span className="new">{row.next}</span>
                                        {row.note && ` ${row.note}`}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {c.status && <span className="status">{c.status}</span>}
                {c.stack && (
                    <p className="stack">
                        <b>Stack</b>
                        {c.stack}
                    </p>
                )}
                <a className="golink" href={c.link.href} {...ext}>
                    {c.link.label} ↗
                </a>
            </aside>
        </div>
    </article>
);

const CompactCase: FC<{ c: CaseFile }> = ({ c }) => (
    <article id={c.id}>
        <span className="meta">
            {c.code} · {c.domain} · {c.years.replace("now", "present")}
        </span>
        <h4>{c.title}</h4>
        <p>{c.summary}</p>
        {c.figure && <span className="figure">{c.figure}</span>}
        <a className="golink" href={c.link.href} {...ext}>
            {c.link.label} ↗
        </a>
    </article>
);

// Consecutive compact files share one grid row; full files stand alone.
const groupCases = (files: CaseFile[]): CaseFile[][] =>
    files.reduce<CaseFile[][]>((groups, f) => {
        const last = groups[groups.length - 1];
        if (f.compact && last && last[0].compact) last.push(f);
        else groups.push([f]);
        return groups;
    }, []);

const Work: FC = () => {
    const groups = groupCases(caseFiles);
    return (
        <section id="work">
            <div className="wrap">
                <div className="sec-head">
                    <div>
                        <h2>Case files</h2>
                        <p>
                            Production work from Nerddevs and Sheraspace. Each file says what I owned and what changed
                            because of it.
                        </p>
                    </div>
                    <span className="count">{caseFiles.length} files</span>
                </div>

                <div className="index-scroll">
                    <table className="index">
                        <thead>
                            <tr>
                                <th>File</th>
                                <th>Project</th>
                                <th>Domain</th>
                                <th>My role</th>
                                <th>Years</th>
                            </tr>
                        </thead>
                        <tbody>
                            {caseFiles.map((c) => (
                                <tr key={c.id}>
                                    <td>{c.code}</td>
                                    <td>
                                        <a href={`#${c.id}`}>{c.indexTitle ?? c.title}</a>
                                    </td>
                                    <td className="dom">{c.indexDomain}</td>
                                    <td className="dom">{c.indexRole}</td>
                                    <td className="yr">{c.years}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {groups.map((g, i) => {
                    const afterCompact = i > 0 && Boolean(groups[i - 1][0].compact);
                    return g[0].compact ? (
                        <div className={`compact${g.length === 1 ? " single" : ""}`} key={g[0].id}>
                            {g.map((c) => (
                                <CompactCase c={c} key={c.id} />
                            ))}
                        </div>
                    ) : (
                        <FullCase c={g[0]} afterCompact={afterCompact} key={g[0].id} />
                    );
                })}
            </div>
        </section>
    );
};

const Own: FC = () => (
    <section id="own">
        <div className="wrap">
            <div className="sec-head">
                <div>
                    <h2>Built on my own</h2>
                    <p>Products I designed, built and run myself, outside client work.</p>
                </div>
                <span className="count">
                    {ownProjects.length} live · {openSource.length} open source
                </span>
            </div>

            <div className="drawer">
                {ownProjects.map((p) => (
                    <article className="own" key={p.title}>
                        <div className="meta">
                            {p.live && <span className="live">● Live</span>}
                            <span>{p.meta}</span>
                        </div>
                        <h3>{p.title}</h3>
                        {p.paragraphs.map((t) => (
                            <p key={t}>{t}</p>
                        ))}
                        {p.chips && (
                            <ul className="chips">
                                {p.chips.map((c) => (
                                    <li key={c}>{c}</li>
                                ))}
                            </ul>
                        )}
                        <div className="links">
                            {p.links.map((l) => (
                                <a className="golink" href={l.href} {...ext} key={l.href}>
                                    {l.label} ↗
                                </a>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="small-list">
                {openSource.map((p) => (
                    <article key={p.title}>
                        <span className="small-meta">{p.meta}</span>
                        <h4>{p.title}</h4>
                        <p>{p.text}</p>
                        <a className="golink" href={p.href} {...ext}>
                            GitHub ↗
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

const About: FC = () => (
    <section id="about">
        <div className="wrap">
            <div className="sec-head">
                <div>
                    <h2>About</h2>
                </div>
            </div>
            <div className="about">
                <div>
                    <p>
                        I'm a senior software engineer at Nerddevs in Dhaka, with a B.Sc. in Computer Science and
                        Engineering from BRAC University. Most of my work is taking a product from architecture to
                        production and then keeping it healthy: healthcare, EdTech, commerce and AI.
                    </p>
                    <p>
                        At Nerddevs I work with international clients across time zones. My afternoon and evening cover
                        the European working day, and I take US-morning calls in my late evening.
                    </p>
                    <p>
                        I also teach. In January 2025 I ran 14 sessions on Laravel and Django for university students at
                        RUET under Bangladesh's national EDGE program.
                    </p>
                    <dl className="skills">
                        {skills.map(([k, v]) => (
                            <Fragment key={k}>
                                <dt>{k}</dt>
                                <dd>{v}</dd>
                            </Fragment>
                        ))}
                    </dl>
                </div>
                <ol className="timeline">
                    {timeline.map((t) => (
                        <li key={t.when + t.what}>
                            <div className="when">{t.when}</div>
                            <div className="what">{t.what}</div>
                            <div className="where">{t.where}</div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    </section>
);

const Contact: FC = () => {
    const [copied, setCopied] = useState(false);
    const selectEmail = () => {
        const el = document.getElementById("email");
        if (!el) return;
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
    };
    const copy = () => {
        if (!navigator.clipboard?.writeText) return selectEmail();
        navigator.clipboard.writeText(EMAIL).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        }, selectEmail);
    };
    return (
        <section id="contact" className="contact">
            <div className="wrap">
                <h2>Hiring a senior full-stack engineer?</h2>
                <p>I'm open to remote senior full-stack and backend roles. Email is the fastest way to reach me.</p>
                <div className="email-row">
                    <a className="email" id="email" href={`mailto:${EMAIL}`}>
                        {EMAIL}
                    </a>
                    <button className="btn" type="button" onClick={copy}>
                        Copy
                    </button>
                    {copied && <span className="copied">Copied</span>}
                </div>
                <div className="actions">
                    <a className="btn" href={LINKEDIN_URL} {...ext}>
                        LinkedIn ↗
                    </a>
                    <a className="btn" href={GITHUB_URL} {...ext}>
                        GitHub ↗
                    </a>
                </div>
            </div>
        </section>
    );
};

const prefersLight = (): boolean => {
    const t = document.documentElement.getAttribute("data-theme");
    return t ? t === "light" : window.matchMedia("(prefers-color-scheme: light)").matches;
};

const Footer: FC = () => {
    const [light, setLight] = useState(prefersLight);
    const toggle = () => {
        const next = light ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("theme", next);
        } catch {
            // Storage unavailable: the choice lasts for this visit only.
        }
        setLight(!light);
    };
    return (
        <footer>
            <div className="wrap">
                <span>Arafat Hossain · Dhaka, Bangladesh</span>
                <button className="theme-toggle" type="button" onClick={toggle}>
                    {light ? "Dark mode" : "Light mode"}
                </button>
            </div>
        </footer>
    );
};

export const App: FC = () => (
    <>
        <Bar />
        <main id="top">
            <Hero />
            <Work />
            <Own />
            <About />
            <Contact />
        </main>
        <Footer />
    </>
);
