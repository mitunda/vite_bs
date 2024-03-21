import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-card-icon">
            <i className="bi bi-wallet2"></i>
          </div>
          <div className="project-card-content">
            <h3 className="project-card-title">Wallet App</h3>
            <p className="project-card-description">
              Allow users to easily access their cards, make payments, manage balances, and track spending.
            </p>
          </div>
          <div className="project-card-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <div className="project-card project-card-green">
          <div className="project-card-icon">
            <i className="bi bi-wallet2"></i>
          </div>
          <div className="project-card-content">
            <h3 className="project-card-title">Wallet App</h3>
            <p className="project-card-description">
              Allow users to easily access their cards, make payments, manage balances, and track spending.
            </p>
          </div>
          <div className="project-card-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-icon">
            <i className="bi bi-wallet2"></i>
          </div>
          <div className="project-card-content">
            <h3 className="project-card-title">Wallet App</h3>
            <p className="project-card-description">
              Allow users to easily access their cards, make payments, manage balances, and track spending.
            </p>
          </div>
          <div className="project-card-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <div className="project-card project-card-green">
          <div className="project-card-icon">
            <i className="bi bi-wallet2"></i>
          </div>
          <div className="project-card-content">
            <h3 className="project-card-title">Wallet App</h3>
            <p className="project-card-description">
              Allow users to easily access their cards, make payments, manage balances, and track spending.
            </p>
          </div>
          <div className="project-card-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;