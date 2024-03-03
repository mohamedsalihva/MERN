import React from 'react';
 import Navbar from './Navbar';
 import '../landingpage/css/style.css'
 import image1 from "./image/steve-jobs-macintosh.jpg"
 import image2 from "./image/project-2.jpg"
 import image3 from "./image/project-3.jpg"
 import image4 from "./image/project-4.jpg"
 import image5 from "./image/project-5.jpg"
 import image6 from "./image/project-6.jpg"
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <header id="about" style={{ backgroundColor: '#007bff', color: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container text-center">
          <h1 id="title" style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>Welcome to My Portfolio</h1>
          <p className="lead mb-4" style={{ fontSize: '1.5rem' }}>I am MOSalih, a full-stack web developer</p>
          <a href="#contact" className="btn btn-light btn-lg" style={{ color: '#007bff', fontWeight: 'bold', borderRadius: '25px', padding: '15px 30px', fontSize: '1.2rem' }}>Get in Touch</a>
        </div>
      </header>
  <section id="projects">
  <div className="project-tile">
    <h1 id="caption">"These are some of my projects"</h1>
    <br />
    <div id="bottom-line" />
    <div className="projects">
      <div className="box">
        <a
          target="_blank"
          href="https://freecodecamp-solutions.github.io/Build-A-Tribute-Page/"
        >
          <img
            src={image1}
            alt="project-img"
            className="project-img"
          />
          <p>
            <span className="code">&lt;</span>
            Tribute Page
            <span className="code">/&gt;</span>
          </p>
        </a>
      </div>
      <div className="box">
        <a
          target="_blank"
          href="https://freecodecamp-solutions.github.io/Personal-Portfolio-Webpage/"
          alt="project-img"
          className="project-img"
        >
          <img
            src={image2}
            alt="project-img"
            className="project-img"
          />
          <p>
            <span className="code">&lt;</span>
            Personal Portfolio
            <span className="code">/&gt;</span>
          </p>
        </a>
      </div>
      <div className="box">
        <a
          target="_blank"
          href="https://freecodecamp-solutions.github.io/Technical-Documentation-Page/"
        >
          <img
            src={image3}
            alt="project-img"
            className="project-img"
          />
          <p>
            <span className="code">&lt;</span>
            Documentation Page
            <span className="code">/&gt;</span>
          </p>
        </a>
      </div>
      <div target="_blank" className="box">
        <a href="https://freecodecamp-solutions.github.io/Product-Landing-Page/">
          <img
            src={image4}
            alt="project-img"
            className="project-img"
          />
          <p>
            <span className="code">&lt;</span>
            Landing Page
            <span className="code">/&gt;</span>
          </p>
        </a>
      </div>
      <div target="_blank" className="box">
        <a href="https://sites.google.com/view/dev-afif/">
          <img
            src={image5}
            alt="project-img"
            className="project-img"
          />
          <p>
            <span className="code">&lt;</span>
            Personal Site
            <span className="code">/&gt;</span>
          </p>
        </a>
      </div>
      <div target="_blank" className="box">
        <a href="https://freecodecamp-solutions.github.io/Build-a-Survey-Form/">
          <img
            src={image6}
            alt="project-img"
            className="project-img"
          />
          <p>
            <span className="code">&lt;</span>
            Survey Form
            <span className="code">/&gt;</span>
          </p>
        </a>
      </div>
    </div>
    <a href="https://github.com/FreeCodeCamp-Solutions" className="btn">
      Show More
    </a>
  </div>
  <Footer/>
</section>

    </div>
    
    
  );
};

export default LandingPage;
