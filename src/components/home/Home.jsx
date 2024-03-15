import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="photo-card">
        {/* Add your image here */}
        <img src="path/to/your/image.jpg" alt="Photo" />
      </div>
      <div className="summary-section">
        <h1 className="display-4">Hello!</h1>
        <p className="lead">
          My portfolio showcases my expertise in web design, with a strong focus on utilizing Figma to create visually appealing and user-friendly interfaces. With proficiency in backend technologies such as Flask, MySQL, and Python, alongside frontend stacks including Bootstrap 5, React, and JavaScript, I deliver dynamic and responsive websites tailored to meet diverse project requirements.
        </p>
        <hr className="my-4" />
        <p>Explore my portfolio to see how I blend design creativity with technical prowess to craft engaging online experiences.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  );
}

export default Home;
