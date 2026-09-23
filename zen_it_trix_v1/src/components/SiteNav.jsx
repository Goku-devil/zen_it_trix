import Brand from './Brand'

export default function SiteNav() {
    return (
        <nav className="site-nav" aria-label="Main navigation">
            <a href="#top"><Brand /></a>
            <div className="nav-links"><a href="#events">Events</a><a href="#schedule">Schedule</a><a href="#contact">Contact</a></div>
            <a className="nav-cta" href="#events">Explore events <span>↘</span></a>
        </nav>
    )
}
