import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="page-container content-page">
      <p className="page-eyebrow">A bit about me</p>
      <h1 className="page-title">Curious by nature.<br /><span>Builder by practice.</span></h1>
      <div className="content-grid">
        <section className="bento-card content-card content-card--wide">
          <p className="card-kicker">Who I am</p>
          <h2>Hi, I&apos;m Jhon Francis.</h2>
          <p className="muted-copy">
            I&apos;m a programmer from the Philippines who enjoys solving problems, exploring technologies,
            and building useful applications. I like understanding how things work and turning ideas into
            functional software.
          </p>
        </section>
        <section className="bento-card content-card">
          <p className="card-kicker">My focus</p>
          <h2>Web &amp; mobile development</h2>
          <p className="muted-copy">Java is my strongest language, with a foundation in object-oriented programming and application development.</p>
        </section>
        <section className="bento-card content-card">
          <p className="card-kicker">Where I&apos;m headed</p>
          <h2>Reliable, useful applications</h2>
          <p className="muted-copy">I&apos;m continuously improving through practice, personal projects, and exploring new technologies.</p>
          <div className="skill-pills">
            <span className="skill-pill">Software Development</span>
            <span className="skill-pill">Java · main language</span>
            <span className="skill-pill">NC II · Networking</span>
          </div>
        </section>
        <section className="bento-card content-card content-card--wide">
          <p className="card-kicker">What I&apos;ve built</p>
          <h2>Learning through real projects</h2>
          <p className="muted-copy">From a personal finance app to a JavaFX library system, I use hands-on work to deepen my software development skills.</p>
          <Link className="text-link" to="/projects">See the projects <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </div>
  )
}
