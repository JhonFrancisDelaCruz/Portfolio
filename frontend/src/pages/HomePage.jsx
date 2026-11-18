import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CursorGridReveal from '../components/CursorGridReveal.jsx'

const skillIcons = [
  { name: 'Java', src: 'java.png' },
  { name: 'JavaScript', src: 'js.jpg' },
  { name: 'Python', src: 'python.png' },
  { name: 'React', src: 'react.png' },
  { name: 'Vite', src: 'vite.png' },
  { name: 'Tailwind CSS', src: 'tailwind.png' },
  { name: 'MySQL', src: 'mysql.png' },
  { name: 'Git', src: 'git.png' },
  { name: 'Figma', src: 'figma.png' },
  { name: 'PHP', src: 'php.png' },
  { name: 'Laravel', src: 'laravel.png' },
  { name: 'Spring Boot', src: 'springboot.svg' },
]

const projects = [
  {
    name: 'Outflow',
    subtitle: 'Expense Tracker',
    image: 'expense-tracker.png',
    alt: 'Outflow personal finance app preview',
    link: '/projects',
  },
  {
    name: 'Library System',
    subtitle: 'Management System',
    image: 'category.png',
    alt: 'Library Management System desktop app preview',
    link: '/projects',
  },
]

export default function HomePage() {
  return (
    <>
      <CursorGridReveal />
      <div className="page-container home-page">
        <section className="home-bento-grid" aria-label="Portfolio overview">
          {/* Top Row: Profile Card, 2x2 Social Grid, Headline Card */}
          <div className="home-grid-row home-top-row">
            {/* 1. Profile Card (Top Left) */}
            <article className="bento-card intro-card">
              <div className="intro-card__top">
                <p className="card-kicker">A Web Developer</p>
                <h1 className="intro-card__name" aria-label="Jhon Francis Dela Cruz">
                  Jhon Francis<br />Dela Cruz
                </h1>
                <p className="intro-copy">
                  A software developer from the Philippines passionate about full-stack development, modern web technologies, and UI/UX. I enjoy creating interactive experiences and building innovative applications.
                </p>
              </div>
              <div className="intro-card__bottom">
                <Link className="ref-circle-arrow" to="/about" aria-label="Read more about Jhon Francis">
                  <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* 2. Individual Square Social Cards (Top Middle 2x2 Grid) */}
            <div className="social-cards-grid" aria-label="Social links">
              {/* GitHub Card */}
              <a
                className="bento-card social-card social-tile"
                href="https://github.com/JhonFrancisDelaCruz"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              {/* Email Card */}
              <a
                className="bento-card social-card social-tile"
                href="mailto:jhonfrancisplantas@gmail.com"
                aria-label="Send Email"
                title="Email"
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              {/* LinkedIn Card */}
              <a
                className="bento-card social-card social-tile"
                href="https://www.linkedin.com/in/john-francis-dela-cruz-5558112bb/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M8 11v5" />
                  <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3.2a1.8 1.8 0 0 0-3.6 0V16" />
                </svg>
              </a>

              {/* Document / Resume / Contact Card */}
              <Link
                className="bento-card social-card social-tile"
                to="/about"
                aria-label="Resume & Qualifications"
                title="Resume & Details"
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </Link>
            </div>

            {/* 3. Main Highlight Card (Top Right) */}
            <article className="bento-card headline-card">
              <h2 className="headline-title">
                Building Skills<br /><span>For Future.</span>
              </h2>
            </article>
          </div>

          {/* Bottom Row: Skills Card, Projects Card, Hobbies Card */}
          <div className="home-grid-row home-bottom-row">
            {/* 4. Skills Card (Bottom Left) */}
            <article className="bento-card skills-card">
              <div className="skills-icon-grid-4col" aria-label="Selected technology logos">
                {skillIcons.map(({ name, src }) => (
                  <span className="skill-ref-tile" key={name} title={name}>
                    <img src={`/portfolio/assets/icons/${src}`} alt={name} loading="lazy" />
                  </span>
                ))}
              </div>
              <div className="card-bottom-row">
                <div>
                  <p className="card-kicker">Most Use</p>
                  <h3 className="card-heading">Skills</h3>
                </div>
                <Link className="ref-circle-arrow" to="/skills" aria-label="View all skills">
                  <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* 5. Projects Card (Bottom Middle) */}
            <article className="bento-card work-card">
              {/* Subtle watermark in background */}
              <div className="projects-watermark" aria-hidden="true">
                MY WORKS
              </div>

              {/* Laptop mockup frames side-by-side */}
              <div className="laptop-mockup-wrapper">
                {projects.map((project) => (
                  <Link
                    className="laptop-frame home-project-tile"
                    key={project.name}
                    to={project.link}
                    aria-label={`View ${project.name}`}
                  >
                    <div className="laptop-screen">
                      <img
                        src={`/portfolio/assets/projects/${project.image}`}
                        alt={project.alt}
                        loading="lazy"
                      />
                    </div>
                    <div className="laptop-base" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <div className="card-bottom-row">
                <div>
                  <p className="card-kicker">Showcase</p>
                  <h3 className="card-heading">Projects</h3>
                </div>
                <Link className="ref-circle-arrow" to="/projects" aria-label="View all projects">
                  <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* 6. Hobbies / 3D Art Card (Bottom Right) */}
            <article className="bento-card hobbies-card">
              <div className="hobbies-image-box interests-visual">
                <img
                  src="/portfolio/assets/images/iot.webp"
                  alt="3D Art and creative exploration"
                  loading="lazy"
                />
              </div>
              <div className="card-bottom-row">
                <div>
                  <p className="card-kicker">Hobbies</p>
                  <h3 className="card-heading">IoT Development</h3>
                </div>
                <Link className="ref-circle-arrow" to="/about" aria-label="Learn about my creative hobbies">
                  <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  )
}
