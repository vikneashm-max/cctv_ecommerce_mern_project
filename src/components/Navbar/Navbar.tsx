import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: any) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
  cartCount: number;
  favoritesCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  onNavigate, 
  onLogout, 
  isLoggedIn,
  cartCount,
  favoritesCount
}) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSearchOpen(false); // Reset search when menu closes
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-left">
            <div className="nav-logo-container" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
              <img src={logo} alt="Logo" className="nav-logo-img" />
              <span className="nav-brand">TN Automation</span>
            </div>
            <div className="nav-links">
              <a onClick={() => onNavigate('home')} className={currentView === 'home' ? 'active' : ''} style={{ cursor: 'pointer' }}>Home</a>
              <a onClick={() => onNavigate('products')} className={currentView === 'products' ? 'active' : ''} style={{ cursor: 'pointer' }}>Products</a>
              <a onClick={() => onNavigate('about')} className={currentView === 'about' ? 'active' : ''} style={{ cursor: 'pointer' }}>About</a>
              <a onClick={() => onNavigate('contact')} className={currentView === 'contact' ? 'active' : ''} style={{ cursor: 'pointer' }}>Contact</a>
            </div>
          </div>
          
          <div className="nav-right">
            <button className="nav-icon-btn" onClick={() => onNavigate('favorites')}>
              <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              {favoritesCount > 0 && <span className="icon-badge">{favoritesCount}</span>}
            </button>
            <button className="nav-icon-btn" onClick={() => onNavigate('cart')}>
              <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {cartCount > 0 && <span className="icon-badge">{cartCount}</span>}
            </button>
            <button className="nav-icon-btn" onClick={isLoggedIn ? onLogout : () => onNavigate('login')}>
              <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header-row">
            <div className="nav-logo-container">
              <img src={logo} alt="Logo" className="nav-logo-img" />
              <span className="nav-brand">TN Automation</span>
            </div>
            <div className="mobile-header-actions">
              <button className="mobile-search-toggle" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <svg viewBox="0 0 24 24" width="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
              <button className="close-menu-btn" onClick={() => setIsMenuOpen(false)}>
                <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </div>

          <div className="mobile-menu-content">
            {isSearchOpen && (
              <div className="mobile-search-bar-container popup">
                <div className="mobile-search-bar">
                  <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input type="text" placeholder="Search products..." autoFocus />
                </div>
              </div>
            )}

            <div className="mobile-nav-list">
              <a onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className={currentView === 'home' ? 'active' : ''}>
                <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Home
              </a>
              <a onClick={() => { onNavigate('products'); setIsMenuOpen(false); }} className={currentView === 'products' ? 'active' : ''}>
                <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7" y2="7"/></svg>
                Products
              </a>
              <a onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className={currentView === 'about' ? 'active' : ''}>
                <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                About
              </a>
              <a onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className={currentView === 'contact' ? 'active' : ''}>
                <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Contact
              </a>
            </div>

            <div className="mobile-menu-divider"></div>

            <div className="mobile-auth-section">
              {isLoggedIn ? (
                <div className="mobile-user-card" onClick={onLogout}>
                  <div className="user-avatar-small">
                    <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div className="user-info-text">
                    <span className="user-name-text">Account</span>
                    <span className="user-action-text">Sign Out</span>
                  </div>
                </div>
              ) : (
                <div className="mobile-user-card" onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}>
                  <div className="user-avatar-small">
                    <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  </div>
                  <div className="user-info-text">
                    <span className="user-name-text">Welcome</span>
                    <span className="user-action-text">Sign In / Sign Up</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-socials">
                <a href="#"><svg viewBox="0 0 24 24" width="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#"><svg viewBox="0 0 24 24" width="18" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
                <a href="#"><svg viewBox="0 0 24 24" width="18" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.054 1.805.249 2.227.412.558.216.96.474 1.38.892.418.419.675.82.89 1.38.163.422.358 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.558-.474.96-.892 1.38-.419.418-.82.675-1.38.89-.422.163-1.057.358-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.054-1.805-.249-2.227-.412-.558-.216-.96-.474-1.38-.892-.419-.419-.82-.675-1.38-.89-.422-.163-1.057-.358-2.227-.413-1.266-.057-1.646-.07-4.85-.07s-3.585.015-4.85.074c-1.17.054-1.805.249-2.227.412-.558.216-.96.474-1.38.892-.419.419-.82.675-1.38.89-.422.163-1.057.358-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.054-1.805-.249-2.227-.412-.558-.216-.96-.474-1.38-.892-.419-.419-.82-.675-1.38-.89-.422-.163-1.057-.358-2.227-.413-1.266-.057-1.646-.07-4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a3.838 3.838 0 110-7.676A3.838 3.838 0 0112 16zM18.406 5.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></a>
              </div>
              <p className="mobile-footer-tag">TN Automation • Premium Security</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
