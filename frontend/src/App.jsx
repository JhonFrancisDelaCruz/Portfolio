import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="stack" element={<Navigate to="/skills" replace />} />
        <Route path="Stack.html" element={<Navigate to="/skills" replace />} />
        <Route path="AboutMe.html" element={<Navigate to="/about" replace />} />
        <Route path="projects.html" element={<Navigate to="/projects" replace />} />
        <Route path="BudgetTracker.html" element={<Navigate to="/projects" replace />} />
        <Route path="LibrarySystem.html" element={<Navigate to="/projects" replace />} />
        <Route path="project-inquiry.html" element={<Navigate to="/contact" replace />} />
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
