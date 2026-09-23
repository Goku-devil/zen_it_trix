import './App.css'
import { nonTechnicalEvents, schedule, technicalEvents } from './data'
import ContactSection from './components/ContactSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import SiteNav from './components/SiteNav'

function IntroStrip() {
    return <section className="intro-strip"><p><span className="strip-dot"></span> One campus. Two tracks. Endless ways to win.</p><p className="scroll-note">Scroll to discover <span>↓</span></p></section>
}

function App() {
    return <main><SiteNav /><Hero /><IntroStrip /><EventsSection technicalEvents={technicalEvents} nonTechnicalEvents={nonTechnicalEvents} /><Schedule items={schedule} /><ContactSection technicalEvents={technicalEvents} nonTechnicalEvents={nonTechnicalEvents} /><Footer /></main>
}

export default App
