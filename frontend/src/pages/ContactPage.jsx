import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="page-container content-page contact-page">
      <p className="page-eyebrow">Contact</p>
      <h1 className="page-title">Have a project<br /><span>in mind?</span></h1>
      <div className="contact-content-grid">
        <section className="bento-card content-card">
          <p className="card-kicker">Let&apos;s talk</p>
          <h2>Tell me what you&apos;re working on.</h2>
          <p className="muted-copy">Send a few lines about your idea. I&apos;ll get back to you by email.</p>
          <a className="button button--primary" href="mailto:jhonfrancisplantas@gmail.com">Email me <ArrowUpRight size={16} /></a>
        </section>
        <div className="contact-options">
          <a className="bento-card contact-option" href="mailto:jhonfrancisplantas@gmail.com">
            <Mail size={20} aria-hidden="true" />
            <span><strong>Email</strong><small>jhonfrancisplantas@gmail.com</small></span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="bento-card contact-option" href="https://www.facebook.com/francis.dela.cruz.950187/" target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            <span><strong>Messenger</strong><small>Message me on Facebook</small></span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="contact-note">The original project-inquiry form is next to be connected to the Django contact API.</p>
    </div>
  )
}
