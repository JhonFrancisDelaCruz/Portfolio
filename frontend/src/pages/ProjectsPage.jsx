import { ArrowUpRight, CodeXml } from 'lucide-react'

const projects = [
  {
    title: 'Outflow',
    type: 'Web application',
    image: '/portfolio/assets/projects/expense-tracker.png',
    description: 'A responsive personal finance app for tracking income, managing expenses, and monitoring monthly budgets. It brings balance, recent activity, and spending patterns together on one dashboard.',
    technologies: ['React', 'Vite', 'Django', 'Tailwind CSS'],
    repository: 'https://github.com/JhonFrancisDelaCruz/Expense-Tracker',
    demo: 'https://outflow-expense-tracker.vercel.app/',
  },
  {
    title: 'Library Management System',
    type: 'Desktop application',
    image: '/portfolio/assets/projects/category.png',
    description: 'A JavaFX desktop app for managing books, members, loans, and late fines. Librarians manage the catalog and borrowing process; students have a separate portal to browse books and check borrowing history.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'Maven'],
    repository: 'https://github.com/JhonFrancisDelaCruz/Library-System',
  },
]

export default function ProjectsPage() {
  return (
    <div className="page-container content-page">
      <p className="page-eyebrow">Selected work</p>
      <h1 className="page-title">Projects built to solve <span>practical problems.</span></h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="bento-card project-detail-card" key={project.title}>
            <div className="project-detail-image-wrap">
              <img src={project.image} alt={`${project.title} project preview`} loading={index ? 'lazy' : 'eager'} />
            </div>
            <div className="project-detail-content">
              <p className="card-kicker">{project.type}</p>
              <h2>{project.title}</h2>
              <p className="muted-copy">{project.description}</p>
              <div className="skill-pills">
                {project.technologies.map((technology) => <span className="skill-pill" key={technology}>{technology}</span>)}
              </div>
              <div className="project-actions">
                {project.demo && <a className="button button--primary" href={project.demo} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a>}
                <a className="button button--quiet" href={project.repository} target="_blank" rel="noreferrer"><CodeXml size={15} /> Source code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
