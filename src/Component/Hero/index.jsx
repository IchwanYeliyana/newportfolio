import React from "react"
import "./Hero.css"
import { Link } from 'react-scroll'
import Profile from '../../assets/Profile.png'
import Achievement from "../../Commons/Achievement"

const Hero = () => {
    return (
        <section id='hero'>
            <div className="wrapper info-container">
                <div className="column">
                    <h3 className='sub-title' data-aos="fade-right">
                        Halo, Saya <span className="primary">Ichwan Yeliyana</span>
                    </h3>
                    <h1 className="heading-1" data-aos="fade-up">
                        <span className="gradient-text">Fullstack</span> Web Developer
                    </h1>
                    <p className="muted" data-aos="fade-up" data-aos-delay="200">
                        Pengembang Web Full Stack dengan keahlian dalam membangun aplikasi web yang tangguh dan mudah digunakan. Berpengalaman dalam pengembangan end-to-end, mulai dari desain antarmuka (UI) yang intuitif hingga arsitektur back-end dan manajemen database. Fokus utama saya adalah memberikan solusi teknis yang tepat guna untuk meningkatkan pengalaman pengguna dan mendukung pertumbuhan bisnis.
                    </p>
                    <div className="flex center buttons-wrapper">
                        {/* <Link to='services' smooth={true} className='btn primary' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Learn More</Link> */}
                        <Link to='contact' smooth={true} className='btn primary' data-aos="fade-right" data-aos-delay="1000" data-aos-offset="50">Contact Me</Link>
                    </div>
                </div>
                <div className="column hero-image" data-aos="fade-left" data-aos-delay="200">
                    <img src={Profile} alt="" />
                </div>
            </div>
            <div className="achievement-cluster">
                <div className="wrapper">
                    <Achievement />
                </div>
            </div>
        </section>
    )
}

export default Hero;
