import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="page-container content-page not-found-page">
      <p className="page-eyebrow">404 — page not found</p>
      <h1 className="page-title">That route<br /><span>isn&apos;t here.</span></h1>
      <Link className="button button--primary" to="/">Back to home</Link>
    </div>
  )
}
