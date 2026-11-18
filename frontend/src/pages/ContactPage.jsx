import { ArrowUpRight, GitBranch, BriefcaseBusiness, Mail, MessageCircle } from 'lucide-react'

const socials = [
  {
    label: 'Email',
    sub: 'jhonfrancisplantas@gmail.com',
    href: 'mailto:jhonfrancisplantas@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Facebook Messenger',
    sub: 'Message me on Facebook',
    href: 'https://www.facebook.com/francis.dela.cruz.950187/',
    Icon: MessageCircle,
  },
  {
    label: 'GitHub',
    sub: 'github.com/JhonFrancisDelaCruz',
    href: 'https://github.com/JhonFrancisDelaCruz',
    Icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    sub: 'linkedin.com/in/john-francis-dela-cruz',
    href: 'https://www.linkedin.com/in/john-francis-dela-cruz-5558112bb/',
    Icon: BriefcaseBusiness,
  },
]

export default function ContactPage() {
  return (
    <div className="page-container content-page contact-page">
      <p className="page-eyebrow">Contact</p>
      <h1 className="page-title">Have a project<br /><span>in mind?</span></h1>

      <div className="contact-content-grid">
        <section className="bento-card content-card contact-main-card">
          <p className="card-kicker">Let&apos;s talk</p>
          <h2>Tell me what you&apos;re working on.</h2>
          <p className="muted-copy">
            I&apos;m open to opportunities, collaborations, and interesting ideas.
            Send a few lines about your project — I&apos;ll get back to you by email.
          </p>
          <a className="button button--primary" href="mailto:jhonfrancisplantas@gmail.com" style={{ marginTop: '24px' }}>
            Send me an email <ArrowUpRight size={16} />
          </a>
          <p className="contact-note">I typically reply within 24–48 hours.</p>
        </section>

        <div className="contact-options">
          {socials.map(({ label, sub, href, Icon }) => (
            <a
              key={label}
              className="bento-card contact-option"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <Icon size={20} aria-hidden="true" />
              <span>
                <strong>{label}</strong>
                <small>{sub}</small>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
