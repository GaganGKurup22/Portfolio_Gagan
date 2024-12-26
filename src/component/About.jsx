import React from "react";
import "./About.css";

function Education() {
  return (
    <section id="education" className="education">
      <h2>About Me</h2>
      <p>
        “I am a Computer Science and Engineering student with expertise in
        full-stack development, graphic design, photo editing, and video
        editing. I excel at creating robust digital solutions that seamlessly
        combine functionality with creative design.”
      </p>
      <div className="school">
        <div className="school-info">
          <img
            src="/download (7) 1.jpg" // Replace with your actual image path
            className="school-photo"
            alt="School"
          />
          <div className="school-details">
            <a
              href="http://pdlm.amritavidyalayam.org/" // Replace with the actual school URL
              target="_blank"
              rel="noopener noreferrer"
              className="school-link"
            >
              <h4>Amrita Vidyalayam</h4>
            </a>
            <p>Education: High School</p>
            <p>Start Year: 2020</p>
            <p>End Year: 2022</p>
          </div>
        </div>
      </div>

      <div className="college">
        <div className="college-info">
          <img
            src="/download (6) 1.jpg" // Replace with your actual image path
            className="college-photo"
            alt="College"
          />
          <div className="college-details">
            <a
              href="https://mbcet.ac.in" // Replace with the actual college URL
              target="_blank"
              rel="noopener noreferrer"
              className="college-link"
            >
              <h4>Mar Baselios College Of Engineering And Technology</h4>
            </a>
            <p>Education: Bachelor of Technology in Computer Science</p>
            <p>Start Year: 2022</p>
            <p>End Year: 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
