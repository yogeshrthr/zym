import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);

  //   if(section){
  //     section.scrollIntoView({
  //       behavior: "smooth"
  //     });
  //   }
  // };

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      // Scenario A: Already on Home page - just scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scenario B: On another page - Go home first, then scroll
      // We pass the ID in the "state" so the Home page knows where to go
      navigate("/", { state: { scrollTo: id } });
    }
  };
  return (
    // <nav className="navbar navbar-expand-lg px-lg-5 py-3 shadow-sm" style={{ background: '#0e2433' }}>
    // Change your nav tag to this:
    <nav className="navbar navbar-expand-lg fixed-top px-lg-5 py-3 shadow-sm" style={{ background: '#0e2433' }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold fs-3" to="/">AF</Link>

        {/* Hamburger Button (Visible only on Mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ filter: 'invert(1)' }} // Makes the black icon white
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav mx-auto gap-lg-3 py-3 py-lg-0">
            <Link className="nav-link text-white opacity-75" to="/" >Home</Link>
            <Link className="nav-link text-white" onClick={() => handleNavClick("hero")}>About</Link>
            {/* <Link className="nav-link text-white opacity-75" onClick={() => scrollToSection("hero")} >About</Link> */}
            {/* <Link className="nav-link text-white opacity-75" onClick={() => scrollToSection("membership")}>Membership</Link> */}
            <Link className="nav-link text-white" onClick={() => handleNavClick("membership")}>Membership</Link>
            <Link className="nav-link text-white opacity-75" to="/schedule">Class Schedule</Link>
            <Link
              className="nav-link text-white" to="/" onClick={(e) => {
                e.preventDefault();
                handleNavClick("visit");
              }}
            >
              Visit Us
            </Link>




          </div>

          {/* Buttons - Stays on right on desktop, stacks on mobile */}
          <div className="d-flex flex-column flex-lg-row gap-2">
            <button className="btn text-white border-0 px-3 py-2" style={{ background: 'transparent' }}>
              Member Login
            </button>
            <button className="btn rounded-pill px-4 py-2" style={{ background: '#1ea7ff', color: 'white', border: 'none' }}>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;