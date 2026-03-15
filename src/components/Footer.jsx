function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Logo */}
        <div className="footer-logo">
          <h2>AF</h2>
        </div>

        {/* Center Links */}
        <div className="footer-links">
          <p>Home</p>
          <p>About</p>
          <p>Membership</p>
          <p>Visit Us</p>
        </div>

        {/* Right Social Icons */}
        <div className="footer-social">
          <span>🌐</span>
          <span>🐦</span>
          <span>📷</span>
        </div>

      </div>

      <div className="footer-bottom">
        © Copyright 2023 Apex Fitness
      </div>

    </footer>
  );
}

export default Footer;