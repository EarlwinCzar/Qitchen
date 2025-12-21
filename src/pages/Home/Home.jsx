import Button from '../../components/atoms/Button';
import FeaturesGrid from '../../components/organisms/FeaturesGrid';
import './Home.css';

/**
 * Home Page - Landing page showcasing features
 * Uses organism and atom components
 */
const Home = () => {
  const features = [
    {
      icon: '⚛️',
      title: 'React + Vite',
      description: 'Lightning-fast development with Hot Module Replacement and optimized build process.'
    },
    {
      icon: '🎨',
      title: 'Atomic Design',
      description: 'Organized component structure from atoms to organisms for maximum reusability.'
    },
    {
      icon: '🚀',
      title: 'Modern Stack',
      description: 'Built with the latest web technologies and best practices for scalable applications.'
    },
    {
      icon: '📦',
      title: 'Feature-Based',
      description: 'Modular architecture with custom hooks and feature folders for better organization.'
    },
    {
      icon: '🎯',
      title: 'Type-Safe',
      description: 'Fully typed components with PropTypes or TypeScript support for reliability.'
    },
    {
      icon: '💅',
      title: 'Styled Components',
      description: 'Scoped CSS modules and flexible styling system for consistent design.'
    }
  ];

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__title">
          Welcome to React Boilerplate
        </h1>
        <p className="home__subtitle">
          A production-ready React application with atomic design principles,
          modern tooling, and best practices built in.
        </p>
        <div className="home__actions">
          <Button size="large" onClick={handleGetStarted}>
            Get Started
          </Button>
          <Button size="large" variant="outline" onClick={() => window.location.href = '/about'}>
            Learn More
          </Button>
        </div>
      </section>

      <section className="home__features">
        <h2 className="home__section-title">Features</h2>
        <FeaturesGrid features={features} />
      </section>
    </div>
  );
};

export default Home;
