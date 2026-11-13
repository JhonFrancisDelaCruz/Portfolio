import { useEffect, useRef } from 'react'

const groups = [
  {
    title: 'Frontend & UI',
    id: 'frontend',
    skills: [
      { name: 'React', icon: 'react.png' },
      { name: 'JavaScript', icon: 'js.jpg', logo: 'js' },
      { name: 'HTML5', icon: 'html.png' },
      { name: 'CSS3', icon: 'css3.svg' },
      { name: 'Tailwind CSS', icon: 'tailwind.png' },
      { name: 'Vite', icon: 'vite.png' },
    ],
  },
  {
    title: 'Backend',
    id: 'backend',
    skills: [
      { name: 'Java', icon: 'java.png' },
      { name: 'Python', icon: 'python.png' },
      { name: 'Django', mask: 'https://cdn.simpleicons.org/django' },
      { name: 'PHP', icon: 'php.png' },
      { name: 'Laravel', icon: 'laravel.png' },
      { name: 'Spring Boot', icon: 'springboot.svg' },
    ],
  },
  {
    title: 'Tools & Workflow',
    id: 'tools',
    skills: [
      { name: 'Git', icon: 'git.png' },
      { name: 'GitHub', icon: 'github.png', logo: 'keep' },
      { name: 'VS Code', icon: 'vscode.png' },
      { name: 'NetBeans', icon: 'netbeans.png' },
      { name: 'Vercel', icon: 'vercel.png', logo: 'keep' },
      { name: 'Figma', icon: 'figma.png' },
      { name: 'XAMPP', icon: 'xampp.svg', logo: 'xampp' },
    ],
  },
  { title: 'Database', id: 'database', skills: [{ name: 'MySQL', icon: 'mysql.png' }] },
  {
    title: 'Mobile',
    id: 'mobile',
    skills: [
      { name: 'Expo', icon: 'expo.png' },
      { name: 'React Native', icon: 'react.png' },
    ],
  },
  {
    title: 'AI Tools & Assistants',
    id: 'ai',
    skills: [
      { name: 'ChatGPT', icon: 'chatgpt.png', logo: 'keep' },
      { name: 'Gemini', icon: 'gemini.png' },
      { name: 'Claude Code', icon: 'claude.png' },
      { name: 'Antigravity', icon: 'antigravity.png' },
      { name: 'Devin', icon: 'devin.png' },
    ],
  },
]

export default function SkillsPage() {
  const stackRef = useRef(null)

  useEffect(() => {
    const root = stackRef.current
    if (!root) return undefined

    document.documentElement.classList.add('js')
    const groupsOnPage = [...root.querySelectorAll('.stackGroup')]
    groupsOnPage.forEach((group, index) => {
      group.dataset.reveal = 'up'
      group.style.setProperty('--d', `${(index % 2) * 0.12}s`)
    })
    root.querySelectorAll('.stackList').forEach((list) => {
      [...list.children].forEach((pill, index) => pill.style.setProperty('--n', index))
    })

    const targets = [...root.querySelectorAll('[data-reveal], .stackList')]
    const reducedMotion = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stackPage" ref={stackRef}>
      <header className="stackPage__header">
        <p className="stackPage__eyebrow">Stack I rely on</p>
        <h1 className="stackPage__title">Tech Stack</h1>
        <p className="stackPage__intro">
          The technologies and tools I use to build web and mobile applications,
          from front-end interfaces to back-end systems and databases.
        </p>
      </header>

      <div className="stackGrid">
        {groups.map((group) => (
          <section className="stackGroup" key={group.id} aria-labelledby={`g-${group.id}`}>
            <div className="stackGroup__head">
              <h2 className="stackGroup__title" id={`g-${group.id}`}>{group.title}</h2>
            </div>
            <ul className="stackList">
              {group.skills.map((skill) => (
                <li className="stackPill" key={skill.name} data-logo={skill.logo}>
                  {skill.icon ? (
                    <img
                      className="stackPill__logo"
                      src={`/portfolio/assets/icons/${skill.icon}`}
                      alt=""
                      width="22"
                      height="22"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="stackPill__icon" style={{ '--i': `url(${skill.mask})` }} aria-hidden="true" />
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

