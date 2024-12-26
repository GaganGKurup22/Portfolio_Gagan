import React from "react";
import "./Contact.css";

function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      logo: "/99264d4441b917087b8dc7ee46c10ba1.jpg",
      link: "https://www.instagram.com/gagan_200_/profilecard/?igsh=enh3ZTNiMHN5NnFx",
    },
    {
      name: "LinkedIn",
      logo: "/4-1.png",
      link: "https://www.linkedin.com/in/gagan-g-kurup-7906a3257/",
    },
    {
      name: "GitHub",
      logo: "/0959bf445eee68f170165b75f352d04d.jpg",
      link: "https://github.com/GaganGKurup22",
    },
    {
      name: "Email",
      logo: "/88e14cc7e7fcbb0e0e09de26cec86c61.png",
      link: "gagangkurup10@gmail.com",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={social.logo}
                alt={social.name}
                className="social-logo"
              />
              <span className="social-name">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
