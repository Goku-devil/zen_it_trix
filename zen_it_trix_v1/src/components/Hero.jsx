import { register_link } from '../data'
import logo from '../assets/logo.png'

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero-copy"><p className="eyebrow">Department of Information Technology · presents</p><h1>Make your<br /><em>mark.</em></h1><p className="hero-text">A day where sharp minds, wild ideas, and good people collide. Come for the challenge. Stay for the energy.</p><div className="hero-actions"><a className="primary-button" href="#events">See all events <span>↓</span></a><a className="register-button" href={register_link} target="_blank" rel="noreferrer">Register now <span>↗</span></a></div></div>
            <div className="hero-art" aria-label="Zen-it-trix 2.0 event details"><div className="hero-grid" aria-hidden="true"></div><div className="hero-glow" aria-hidden="true"></div><img className="hero-logo" src={logo} alt="Zen-it-trix logo" /><div className="burst burst-one">THINK<br />LOUD</div><div className="burst burst-two">PLAY<br />HARD</div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="hero-sticker">APR<br /><strong>24</strong><br />2026</div><p className="hero-location">AT THE<br /><strong>MAIN CAMPUS</strong></p><span className="hero-mark">✳</span></div>
        </section>
    )
}
