// src/components/common/Footer.tsx
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaRobot } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { GiArtificialIntelligence } from 'react-icons/gi';
import logo from '../../assests/images/trishna.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.47,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="footer-container">
        <div className="footer-section footer-logo-section">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="Trishna Logo" className="footer-logo-img" />
            <div className="footer-logo-text-container">
              <span className="footer-logo-main">TRISHNA</span>
              <span className="footer-logo-year">2K25</span>
            </div>
          </div>
          <p className="footer-description">
            The annual technical fest of [Your College Name], bringing together the brightest minds for innovation, competition, and technological exploration.
          </p>
          
          <div className="footer-tech-icons">
            <div className="tech-icon"><GiArtificialIntelligence /></div>
            <div className="tech-icon"><FaRobot /></div>
            <div className="tech-icon"><IoMdRocket /></div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/workshops">Workshops</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-section-title">Events</h3>
          <ul className="footer-links">
            <li><Link to="/events/coding">Code Wars</Link></li>
            <li><Link to="/events/robotics">Robo Soccer</Link></li>
            <li><Link to="/events/hackathon">Hackathon</Link></li>
            <li><Link to="/events/quiz">Tech Quiz</Link></li>
            <li><Link to="/events/workshop">AI Workshop</Link></li>
            <li><Link to="/events/gaming">Gaming Arena</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-section-title">Connect With Us</h3>
          <div className="footer-contact-info">
            <p><i className="fas fa-envelope"></i> trishna2k25@yourcollege.edu</p>
            <p><i className="fas fa-phone"></i> +91 98765 43210</p>
            <p><i className="fas fa-map-marker-alt"></i> [Your College Address], City, State</p>
          </div>
          
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} TRISHNA - Technical Fest. All Rights Reserved.</p>
          <div className="footer-credits">
            <span>Made with ❤️ by B. Guru Gangadhar Reddy - 21AK1A0427</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;