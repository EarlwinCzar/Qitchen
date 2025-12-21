import Card from '../../components/atoms/Card';
import './About.css';

/**
 * About Page - Information about the project
 * Demonstrates using atomic components in pages
 */
const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__title">About This Project</h1>
        <p className="about__subtitle">
          A comprehensive React boilerplate following atomic design principles
        </p>
      </div>

      <div className="about__content">
        <Card padding="large" className="about__section">
          <h2 className="about__section-title">🏗️ Architecture</h2>
          <p className="about__text">
            This boilerplate follows <strong>Atomic Design</strong> methodology, 
            organizing components into a hierarchical structure:
          </p>
          <ul className="about__list">
            <li><strong>Atoms:</strong> Basic building blocks (Button, Input, Card)</li>
            <li><strong>Molecules:</strong> Simple combinations (FormField, ContactCard)</li>
            <li><strong>Organisms:</strong> Complex components (ContactForm, FeaturesGrid)</li>
            <li><strong>Pages:</strong> Complete page compositions</li>
          </ul>
        </Card>

        <Card padding="large" className="about__section">
          <h2 className="about__section-title">📂 Folder Structure</h2>
          <p className="about__text">
            The project is organized for maximum scalability and maintainability:
          </p>
          <ul className="about__list">
            <li><code>/components</code> - Reusable UI components organized by atomic levels</li>
            <li><code>/features</code> - Feature-specific logic and custom hooks</li>
            <li><code>/pages</code> - Page-level components</li>
            <li><code>/layouts</code> - Layout wrappers</li>
            <li><code>/hooks</code> - Shared custom hooks</li>
            <li><code>/lib</code> - Utilities and constants</li>
          </ul>
        </Card>

        <Card padding="large" className="about__section">
          <h2 className="about__section-title">🎯 Best Practices</h2>
          <p className="about__text">
            Built with modern React patterns and best practices:
          </p>
          <ul className="about__list">
            <li>Component composition over inheritance</li>
            <li>Custom hooks for business logic separation</li>
            <li>Feature-based organization for scalability</li>
            <li>Consistent naming conventions</li>
            <li>Scoped CSS for style isolation</li>
            <li>Responsive design from the ground up</li>
          </ul>
        </Card>

        <Card padding="large" className="about__section">
          <h2 className="about__section-title">⚡ Tech Stack</h2>
          <div className="about__tech-grid">
            <div className="about__tech-item">
              <strong>React 18</strong>
              <span>Modern UI library</span>
            </div>
            <div className="about__tech-item">
              <strong>Vite</strong>
              <span>Fast build tool</span>
            </div>
            <div className="about__tech-item">
              <strong>React Router</strong>
              <span>Client-side routing</span>
            </div>
            <div className="about__tech-item">
              <strong>ESLint</strong>
              <span>Code quality</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
