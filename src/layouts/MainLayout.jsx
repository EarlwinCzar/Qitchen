import { Outlet, Link, useLocation } from 'react-router-dom';
import './MainLayout.css';

/**
 * MainLayout - Primary layout wrapper
 * Provides consistent header, navigation, and footer across all pages
 */
const MainLayout = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="main-layout__header-content">
          <Link to="/" className="main-layout__logo">
            ⚛️ React Boilerplate
          </Link>
          
          <nav className="main-layout__nav">
            <Link 
              to="/" 
              className={`main-layout__nav-link ${isActive('/') ? 'main-layout__nav-link--active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`main-layout__nav-link ${isActive('/about') ? 'main-layout__nav-link--active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`main-layout__nav-link ${isActive('/contact') ? 'main-layout__nav-link--active' : ''}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="main-layout__main">
        <Outlet />
      </main>

      <footer className="main-layout__footer">
        <div className="main-layout__footer-content">
          <p className="main-layout__footer-text">
            © {new Date().getFullYear()} React Boilerplate. Built with Atomic Design principles.
          </p>
          <div className="main-layout__footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
