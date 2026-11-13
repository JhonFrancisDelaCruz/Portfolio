import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import CursorGridReveal from '../components/CursorGridReveal.jsx'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/JhonFrancisDelaCruz', Icon: CodeXml },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-francis-dela-cruz-5558112bb/', Icon: BriefcaseBusiness },
  { label: 'Facebook', href: 'https://www.facebook.com/francis.dela.cruz.950187/', Icon: MessageCircle },
  { label: 'Email', href: 'mailto:jhonfrancisplantas@gmail.com', Icon: Mail },
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
        <div className="eyebrow-row">
          <span className="availability"><span className="availability-dot" /> Available for opportunities</span>
          <span className="eyebrow-note">Based in the Philippines</span>
        </div>

        <section className="bento-grid home-bento-grid" aria-label="Portfolio overview">
          <article className="bento-card intro-card">
            <div className="intro-person">
              <img className="profile-photo" src="/portfolio/assets/images/Profile.png" alt="Portrait of Jhon Francis Dela Cruz" width="120" height="120" />
              <p className="card-kicker">Aspiring software engineer</p>
            </div>
            <div>
              <h2>Jhon Francis Dela Cruz</h2>
              <p className="intro-copy">A programmer from the Philippines who enjoys solving problems and building useful applications.</p>
            </div>
            <Link className="card-arrow intro-arrow" to="/about" aria-label="Read more about Jhon Francis">
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </article>

          <article className="bento-card social-card" aria-label="Social links">
            <p className="card-kicker">Connect</p>
            <div className="social-grid">
              {socialLinks.map(({ label, href, Icon }) => (
                <a className="social-tile" key={label} href={href} aria-label={label} title={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>

          <article className="bento-card headline-card">
          <p className="card-kicker">A DEVELOPER'S MINDSET</p>
          <h1>
            First, solve the problem. Then, write the code.
          </h1>
          <p className="headline-note">— John Johnson</p>
        </article>

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
                <p className="card-kicker">Stack I rely on</p>
                <h2>Tech stack</h2>
              </div>
              <Link className="card-arrow" to="/skills" aria-label="View all skills"><ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
          </article>

          <article className="bento-card work-card">
            <span className="project-watermark" aria-hidden="true">PROJECTS</span>
            <div className="card-bottom-row project-heading-row">
              <div>
                <p className="card-kicker">Selected work</p>
                <h2>Projects</h2>
              </div>
              <Link className="small-link project-all-link" to="/projects">View all <ArrowUpRight size={14} /></Link>
            </div>
            <div className="home-project-grid">
              {projects.map((project) => (
                <Link className="home-project-tile" key={project.name} to="/projects" aria-label={`View ${project.name}`}>
                  <img src={`/portfolio/assets/projects/${project.image}`} alt={project.alt} loading="lazy" />
                  <span className="home-project-caption">{project.name}</span>
                </Link>
              ))}
            </div>
          </article>

          <article className="bento-card hobbies-card">
            <div className="interests-visual" aria-label="Web and mobile development tools">
              {interestIcons.map(({ name, src }) => (
                <span className="interest-icon-tile" key={name}>
                  <img src={`/portfolio/assets/icons/${src}`} alt={name} loading="lazy" />
                </span>
              ))}
            </div>
            <div className="card-bottom-row interests-bottom-row">
              <div>
                <p className="card-kicker">Interests</p>
                <h2>Web &amp; mobile apps</h2>
              </div>
              <Link className="card-arrow" to="/about" aria-label="Learn about my interests"><ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}
