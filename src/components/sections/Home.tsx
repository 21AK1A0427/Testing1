import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../../components/sections/Countdown';
import VisitorCounter from '../../components/sections/VisitorCounter';
import StatsCounter from '../../components/sections/StatsCounter';
import EventTimeline from '../../components/sections/EventTimeline';
import ChatBot from '../../components/sections/ChatBot';
import { FaDownload, FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaArrowRight } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutline360 } from 'react-icons/md';

// Image imports
import heroImage from '../../assests/images/Poster.png';
import eventBanner from '../../assests/images/12979916_5079835.jpg';
import promoVideoPoster from '../../assests/images/7a43990d-d691-4aa5-a7d6-5f9c9c5d530f.jpg';
import certificatePreview from '../../assests/images/Codeathon 2k25 Invitation.jpg';
import brochurePreview from '../../assests/images/Download Grunge party crowd background for free.jpeg';
import posterPreview from '../../assests/images/DwUVMej.png';
import sponsor1 from '../../assests/images/GUNJACK VR UI, Haoliang Yang.jpg';
import sponsor2 from '../../assests/images/_Achievement Certificate.png';
import sponsor3 from '../../assests/images/a346fb78-710f-4faa-b5b1-a87812e13510.jpg';
import sponsor4 from '../../assests/images/b2197fe3-2e15-4972-bf28-535707b75093.jpeg';
import trishnaLogo from '../../assests/images/logo.png';

// Video import
import promoVideo from '../../assests/images/hlo.mp4';

// Update your imports at the top of the file
import certificatePdf from '../../assests/images/21AK1A0427 APSCHE.pdf';
import brochurePdf from '../../assests/images/21AK1A0427 APSCHE.pdf';
import posterPdf from '../../assests/images/21AK1A0427 APSCHE.pdf';


import '../../styles/Home.css';

const Home = () => {
  // State management
  const [darkMode, setDarkMode] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Refs
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Add this state near your other state declarations
const [showImageModal, setShowImageModal] = useState(false);




  // Video modal handlers
  const openVideoModal = () => {
    setShowVideoModal(true);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0;
        modalVideoRef.current.muted = true; // Start muted for autoplay
        modalVideoRef.current.play()
          .then(() => {
            modalVideoRef.current!.muted = false;
          })
          .catch(error => {
            console.error("Video playback failed:", error);
            modalVideoRef.current!.controls = true;
          });
      }
    }, 100);
  };
// Add this function to open the image modal

  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setShowVideoModal(false);
  };

  // Dark mode detection
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
    
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video controls
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Video playback failed:", error);
          videoRef.current!.controls = true;
        });
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  // Logo rotation handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setLogoRotation((prev) => (prev + deltaX * 0.5) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setLogoRotation((prev) => (prev + deltaX * 0.5) % 360);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Data
  const statsData = [
    { id: 1, title: "Total Events", target: 15, suffix: "+" },
    { id: 2, title: "Participants", target: 300, suffix: "+" },
    { id: 3, title: "Colleges", target: 20, suffix: "+" },
    { id: 4, title: "Prize Money", target: 10, suffix: "K+" },

  ];

  const whatsNew2025 = [
    { title: "AI-Powered Event Recommendations", icon: "🤖" },
    { title: "Virtual Reality Competitions", icon: "👓" },
    { title: "Blockchain Workshop Series", icon: "⛓️" },
    { title: "Drone Racing Championship", icon: "🚁" },
    { title: "Sustainable Tech Hackathon", icon: "🌱" },
    { title: "International Guest Speakers", icon: "🌍" }
  ];

  return (
    <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-gradient">TRISHNA</span> <span className="year-glitch" data-text="2K25">2K25</span>
            </h1>
            <p className="hero-subtitle">TECHNICAL SYMPOSIUM</p>
            <p className="hero-description">
              Join India's premier technical fest with 20+ events, workshops, and competitions
              showcasing cutting-edge technology and innovation
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-primary btn-hover-glow">
                <span>Register Now</span>
                <div className="hover-effect"></div>
              </Link>
              <Link to="/events" className="btn-secondary btn-hover-border">
                <span>Explore Events</span>
                <div className="hover-effect"></div>
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={heroImage} alt="TRISHNA Fest" className="hero-image" />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Event Counters Section */}
      <section className="counters-section">
        <div className="section-container">
          <div className="counters-grid">
            <div className="counter-card">
             
              <h3>⏱️Time Until Event</h3>
              <div className="counter-value">
                <Countdown/>
              </div>
            </div>
            <div className="counter-card">
              
              <h3>👥 Current Visitors</h3>
              <div className="counter-value">
                <VisitorCounter />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-outline">EVENT</span> STATS
            </h2>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
            </div>
            <p className="section-subtitle">Key numbers that define TRISHNA 2K24</p>
          </div>
          <div className="stats-grid">
            {statsData.map((stat) => (
              <div className="stat-card" key={stat.id}>
                <div className="stat-value">
                  <StatsCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <h3 className="stat-title">{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Banner */}
      
      <section className="event-banner-section">
  <div className="event-banner-container">
    {/* Digital Background Elements */}
    <div className="banner-grid-pattern"></div>
    <div className="digital-particles"></div>
    <div className="binary-animation"></div>
    
    {/* Banner Image */}
    <img src={eventBanner} alt="TRISHNA 2K25 Digital Event" className="event-banner" />
    
    {/* Content Overlay */}
    <div className="banner-overlay">
      <div className="banner-content">
        <h3 data-text="REGISTRATIONS OPEN">REGISTRATIONS OPEN</h3>
        <p>Join the ultimate tech experience on 18 and 19 ocober 2025</p>
        <Link to="/register" className="btn-digital">
          <span>Register Now</span>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-outline">ABOUT</span> TRISHNA
            </h2>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
            </div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                TRISHNA is the annual technical festival of our institution, bringing together the
                brightest minds from across the nation to compete, collaborate, and innovate.
              </p>
              <p>
                TRISHNA 2K25 promises to be our most ambitious edition yet, featuring groundbreaking
                competitions, workshops by industry leaders, and networking opportunities.
              </p>
              <div className="about-buttons">
                <Link to="/about" className="btn-outline btn-hover-swipe">
                  <span>Learn More</span>
                  <FaArrowRight className="arrow-icon" />
                  <div className="hover-effect"></div>
                </Link>
              </div>
            </div>
            <div className="logo-viewer-container">
              <div 
                className="logo-viewer"
                ref={logoRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ transform: `rotateY(${logoRotation}deg)` }}
              >
                <img src={trishnaLogo} alt="TRISHNA Logo" className="logo-3d" />
                <div className="logo-halo"></div>
              </div>
              <div className="viewer-instructions">
                <MdOutline360 /> <span>Drag to rotate logo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Video Section */}
      <section className="video-section">
        <div className="section-container">
          <div className="video-container">
            <div className="video-wrapper">
              <div className="video-frame">
                <video
                  ref={videoRef}
                  poster={promoVideoPoster}
                  onClick={toggleVideo}
                  muted={videoMuted}
                  loop
                  playsInline
                >
                  <source src={promoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-controls">
                  <button className="control-btn" onClick={toggleVideo}>
                    {videoPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button className="control-btn" onClick={toggleMute}>
                    {videoMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                </div>
              </div>
              <button className="btn-primary btn-hover-glow video-modal-btn" onClick={openVideoModal}>
                <span>Watch Full Promo</span>
                <div className="hover-effect"></div>
              </button>
            </div>
            <div className="video-content">
              <h3>Experience TRISHNA 2K25</h3>
              <p>
                Get a glimpse of what awaits you at this year's festival. From high-energy
                competitions to inspiring talks, TRISHNA 2K25 will be unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="whats-new-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-outline">WHAT'S NEW</span> IN 2025?
            </h2>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
            </div>
            <p className="section-subtitle">Discover the exciting innovations we're bringing this year</p>
          </div>
          <div className="whats-new-grid">
            {whatsNew2025.map((item, index) => (
              <div className="whats-new-card" key={index}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <div className="card-tech-tag">NEW</div>
                <div className="card-hover-effect"></div>
                <div className="card-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="timeline-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-outline">EVENT</span> ROADMAP
            </h2>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
            </div>
            <p className="section-subtitle">Key milestones on our journey to TRISHNA 2K25</p>
          </div>
          <EventTimeline />
        </div>
      </section>

      {/* Downloads Section */}
      <section className="downloads-section">
  <div className="section-container">
    <div className="section-header">
      <h2 className="section-title">
        <span className="title-outline">DOWNLOADS</span>
      </h2>
      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-dot"></div>
        <div className="divider-line"></div>
      </div>
      <p className="section-subtitle">Get all the resources you need</p>
    </div>
    <div className="downloads-grid">
      <div className="download-card">
        <div className="download-preview">
          <img src={certificatePreview} alt="Certificate Preview" />
          <div className="download-overlay">
            <button 
              onClick={() => {
                // Create a temporary anchor element
                const link = document.createElement('a');
                link.href = certificatePdf;
                link.download = 'TRISHNA-2K25-Certificate-Sample.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }} 
              className="download-btn btn-hover-glow"
            >
              <span><FaDownload /> Download</span>
              <div className="hover-effect"></div>
            </button>
          </div>
        </div>
        <div className="download-info">
          <h3>Participation Certificate</h3>
          <p>Sample format for all events</p>
          <div className="file-info">
            <span>PDF</span>
            <span>2.4 MB</span>
          </div>
        </div>
      </div>
      <div className="download-card">
        <div className="download-preview">
          <img src={brochurePreview} alt="Brochure Preview" />
          <div className="download-overlay">
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = brochurePdf;
                link.download = 'TRISHNA-2K25-Brochure.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }} 
              className="download-btn btn-hover-glow"
            >
              <span><FaDownload /> Download</span>
              <div className="hover-effect"></div>
            </button>
          </div>
        </div>
        <div className="download-info">
          <h3>Event Brochure</h3>
          <p>Complete event details</p>
          <div className="file-info">
            <span>PDF</span>
            <span>5.1 MB</span>
          </div>
        </div>
      </div>
      <div className="download-card">
        <div className="download-preview">
          <img src={posterPreview} alt="Poster Preview" />
          <div className="download-overlay">
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = posterPdf;
                link.download = 'TRISHNA-2K25-Poster.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }} 
              className="download-btn btn-hover-glow"
            >
              <span><FaDownload /> Download</span>
              <div className="hover-effect"></div>
            </button>
          </div>
        </div>
        <div className="download-info">
          <h3>Fest Poster</h3>
          <p>High resolution poster</p>
          <div className="file-info">
            <span>PDF</span>
            <span>3.7 MB</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-outline">OUR</span> SPONSORS
            </h2>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
            </div>
            <p className="section-subtitle">Proudly supported by industry leaders</p>
          </div>
          <div className="sponsors-grid">
            <div className="sponsor-logo"><img src={sponsor1} alt="Sponsor 1" /></div>
            <div className="sponsor-logo"><img src={sponsor2} alt="Sponsor 2" /></div>
            <div className="sponsor-logo"><img src={sponsor3} alt="Sponsor 3" /></div>
            <div className="sponsor-logo"><img src={sponsor4} alt="Sponsor 4" /></div>
          </div>
          <div className="section-footer">
            <Link to="/sponsors" className="btn-outline btn-hover-swipe">
              <span>View All Sponsors</span>
              <FaArrowRight className="arrow-icon" />
              <div className="hover-effect"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to be part of <span className="text-gradient">TRISHNA 2K25</span>?</h2>
            <p>
              Join India's most exciting technical festival with participants from 150+ colleges and
              ₹10L+ in prizes
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn-primary btn-hover-glow">
                <span>Register Now</span>
                <div className="hover-effect"></div>
              </Link>
              <Link to="/contact" className="btn-secondary btn-hover-border">
                <span>Contact Team</span>
                <div className="hover-effect"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal">
          <div className="modal-overlay" onClick={closeVideoModal}></div>
          <div className="modal-content">
            <div className="modal-border"></div>
            <button className="close-modal" onClick={closeVideoModal}>
              <IoMdClose />
            </button>
            <video
              ref={modalVideoRef}
              controls
              autoPlay
              muted={false}
              loop
              playsInline
              onError={(e) => {
                const video = e.target as HTMLVideoElement;
                console.error("Video error:", video.error);
                video.controls = true;
              }}
            >
              <source src={promoVideo} type="video/mp4" />
              <p>
                Your browser doesn't support HTML5 video. Here is
                a <a href={promoVideo}>link to the video</a> instead.
              </p>
            </video>
          </div>
        </div>

        
      )}

      {showImageModal && (
  <div className="image-modal">
    <div className="modal-overlay" onClick={() => setShowImageModal(false)}></div>
    <div className="modal-content">
      <div className="modal-border"></div>
      <button className="close-modal" onClick={() => setShowImageModal(false)}>
        <IoMdClose />
      </button>
      <img src={currentImage} alt="Full Preview" className="modal-image" />
    </div>
  </div>
)}


      {/* Chatbot */}
      <ChatBot name="Trishna" />
    </div>
  );
};

export default Home;