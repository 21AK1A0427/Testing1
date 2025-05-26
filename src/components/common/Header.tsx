// src/components/common/Header.tsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
 
  FaHome, 
  FaInfoCircle, 
  FaCalendarAlt,
  FaRobot,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaUsers,
  FaImages,
  FaEnvelope
} from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import './Header.css';
import logo from '../../assests/images/trishna.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Haptic feedback simulation
  const vibrate = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const toggleMenu = () => {
    vibrate();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { path: "/", name: "HOME", icon: <FaHome /> },
    { path: "/about", name: "ABOUT", icon: <FaInfoCircle /> },
    { path: "/events", name: "EVENTS", icon: <FaRobot /> },
    { path: "/register", name: "REGISTER", icon: <FaSignInAlt /> },
    { path: "/schedule", name: "SCHEDULE", icon: <FaCalendarAlt /> },
    { path: "/sponsors", name: "SPONSORS", icon: <IoRocketSharp /> },
    { path: "/team", name: "TEAM", icon: <FaUsers /> },
    { path: "/gallery", name: "GALLERY", icon: <FaImages /> },
    { path: "/contact", name: "CONTACT", icon: <FaEnvelope /> }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      {/* Animated gradient background */}
      <div className="header-gradient"></div>
      
      {/* Glow effect */}
      <div className="header-glow"></div>
      
      <div className="header-container">
        <Link to="/" className="logo-wrapper">
          <div className="logo-hologram">
            <img src={logo} alt="Trishna Logo" className="logo-img" />
            <div className="hologram-effect"></div>
          </div>
          <div className="logo-text-container">
            <span className="logo-main">TRISHNA</span>
            <span className="logo-year">2K25</span>
         
          </div>
        </Link>
        
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link 
              to={item.path} 
              className="nav-link"
              key={item.path}
            >
              <span className="nav-text">{item.name}</span>
              <span className="nav-underline"></span>
            </Link>
          ))}
          
          
        </nav>

        <div className="mobile-controls">
          
          
          <button 
            ref={buttonRef}
            className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </button>
        </div>

        <div 
          ref={menuRef}
          className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        >
          <div className="mobile-nav-header">
            <div className="logo-hologram">
              <img src={logo} alt="Trishna Logo" className="mobile-logo-img" />
              <div className="hologram-effect"></div>
            </div>
            <span className="mobile-logo-text">TRISHNA 2K25</span>
          </div>
          
          <div className="mobile-nav-items">
            {navItems.map((item) => (
              <Link 
                to={item.path} 
                className="mobile-nav-link"
                onClick={() => {
                  setMobileMenuOpen(false);
                  vibrate();
                }}
                key={item.path}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-text">{item.name}</span>
                <span className="mobile-nav-arrow">→</span>
              </Link>
            ))}
          </div>
          
          <div className="mobile-nav-footer">
            <p>TECHNICAL EXTRAVAGANZA</p>
            <div className="tech-glows">
              <span className="tech-glow"></span>
              <span className="tech-glow"></span>
              <span className="tech-glow"></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated border */}
      <div className="header-border">
        <div className="border-gradient"></div>
      </div>
      
      {/* Scroll progress indicator */}
      {scrolled && (
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{
              width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
            }}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;