import { GitBranch, Mail, BriefcaseBusiness, MessageCircle, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CursorGridReveal from '../components/CursorGridReveal.jsx'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/JhonFrancisDelaCruz', Icon: GitBranch },
  { label: 'Email', href: 'mailto:jhonfrancisplantas@gmail.com', Icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-francis-dela-cruz-5558112bb/', Icon: BriefcaseBusiness },
  { label: 'Facebook', href: 'https://www.facebook.com/francis.dela.cruz.950187/', Icon: MessageCircle },
]

const skillIcons = [
  { name: 'Java', src: 'java.png' },
  { name: 'JavaScript', src: 'js.jpg' },
  { name: 'Python', src: 'python.png' },
  { name: 'React', src: 'react.png' },
  { name: 'Expo', src: 'expo.png' },
  { name: 'Tailwind CSS', src: 'tailwind.png' },
  { name: 'MySQL', src: 'mysql.png' },
  { name: 'Git', src: 'git.png' },
  { name: 'Vite', src: 'vite.png' },
  { name: 'Figma', src: 'figma.png' },
  { name: 'PHP', src: 'php.png' },
  { name: 'Laravel', src: 'laravel.png' },
]

const projects = [
  { name: 'Outflow', image: 'expense-tracker.png', alt: 'Outflow personal finance app preview' },
  { name: 'Library Management System', image: 'category.png', alt: 'Library Management System preview' },
]

const interestIcons = [
  { name: 'React', src: 'react.png' },
  { name: 'Expo', src: 'expo.png' },
  { name: 'Figma', src: 'figma.png' },
  { name: 'JavaScript', src: 'js.jpg' },
]

export default function HomePage() {
  return (
    <>
      <CursorGridReveal />
      <div className="page-container home-page">

        <section className="bento-grid home-bento-grid" aria-label="Portfolio overview">
          {/* Intro card */}
          <article className="bento-card intro-card">
            <div>
              <p className="card-kicker">A Web Developer</p>
              <h2>Jhon Francis<br />Dela Cruz</h2>
              <p className="intro-copy">A programmer from the Philippines passionate about full-stack development and building useful web applications.</p>
            </div>
            <Link className="card-arrow intro-arrow" to="/about" aria-label="Read more about Jhon Francis">
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </article>

          {/* Social links — 2×2 icon grid */}
          <article className="bento-card social-card" aria-label="Social links">
            <div className="social-grid">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  className="social-tile"
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>

          {/* Big headline */}
          <article className="bento-card headline-card">
            <h1>Building Skills<br /><span>For Future.</span></h1>
          </article>

          {/* Skills / tech stack */}
          <article className="bento-card skills-card">
            <div className="skill-icon-grid" aria-label="Selected technology logos">
              {skillIcons.map(({ name, src }) => (
                <span className="skill-icon-tile" key={name} title={name}>
                  <img src={`/portfolio/assets/icons/${src}`} alt={name} loading="lazy" />
                </span>
              ))}
            </div>
            <div className="card-bottom-row">
              <div>
                <p className="card-kicker">Most Use</p>
                <h2>Skills</h2>
              </div>
              <Link className="card-arrow" to="/skills" aria-label="View all skills">
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>

          {/* Projects */}
          <article className="bento-card work-card">
            <span className="project-watermark" aria-hidden="true">MY WORKS&nbsp;&nbsp;MY WORKS</span>
            <div className="home-project-grid">
              {projects.map((project) => (
                <Link className="home-project-tile" key={project.name} to="/projects" aria-label={`View ${project.name}`}>
                  <img src={`/portfolio/assets/projects/${project.image}`} alt={project.alt} loading="lazy" />
                </Link>
              ))}
            </div>
            <div className="card-bottom-row project-heading-row">
              <div>
                <p className="card-kicker">Showcase</p>
                <h2>Projects</h2>
              </div>
              <Link className="card-arrow" to="/projects" aria-label="View all projects">
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>

          {/* Hobbies / interests */}
          <article className="bento-card hobbies-card">
            <div className="hobbies-image-wrap" aria-label="Interests visual">
              <img src="/portfolio/assets/images/Profile.png" alt="Profile" className="hobbies-bg-img" />
            </div>
            <div className="card-bottom-row interests-bottom-row">
              <div>
                <p className="card-kicker">Interests</p>
                <h2>Web &amp; mobile apps</h2>
              </div>
              <Link className="card-arrow" to="/about" aria-label="Learn about my interests">
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}
