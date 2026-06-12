import React from "react"
import "./Contact.css"
import { contactOptions } from "../../sources"

const Contact = () => {
    return (
        <section id='contact' data-aos="fade-zoom-in">
            <div className="wrapper">
                <div className="contact-options">
                    {
                        contactOptions.map((option, index) => (
                            <div className='flex-center option' data-aos="fade-right" key={index}>
                                <div className="flex-center icon-wrapper">{option.icon}</div>
                                <h4 className="muted">{option.title}</h4>
                                <h3 className="value">{option.value}</h3>
                            </div>
                        ))
                    }
                </div>
                {/* <div className="contact-form" data-aos="fade-left">
                    <div className="top">
                        <h1 className="title">
                            <span className="gradient-text">Bergabunglah denganku!</span>
                        </h1>
                        <p className="muted">
                            Saya membangun dengan presisi dan semangat, menciptakan proyek web yang menonjol. Sesederhana itu.
                        </p>
                    </div>
                    <div className="middle">
                        <div className="flex row">
                            <input type="text" placeholder='Nama Depan' name='namadepan' className="control" />
                            <input type="text" placeholder='Nama Belakang' name='namabelakang' className="control" />
                        </div>
                        <div className="flex row">
                            <input type="email" placeholder='Alamat Email' name='email' className="control" />
                            <input type="tel" placeholder='Nomor Telepon' name='phone' className="control" />
                        </div>
                        <textarea name="message" cols={30} rows={10} placeholder="Pesan" className="control"></textarea>
                    </div>
                    <div className="flex-center bottom">
                        <button className='btn primary'>Kirim Sekarang</button>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Contact;
