import { Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PostAuction from "./components/PostAuction";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useState, useRef, useEffect } from "react";
import Edit from "./components/Edit";

// Create animated versions of the Nav.Link and NavDropdown.Item components
const MotionNavLink = motion(Nav.Link);
const MotionNavDropdown = motion(NavDropdown);
const MotionDropdownItem = motion(NavDropdown.Item);

// Create a PageTransition component for the clip path animation
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at center)" }}
      animate={{ 
        clipPath: "circle(100% at center)",
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 20,
        }
      }}
      exit={{ 
        clipPath: "circle(0% at center)",
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 20,
          delay: 0.1
        }
      }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const nav = useNavigate();
  const location = useLocation();
  const year = new Date().getFullYear();

  const [user, setUser] = useState(localStorage.getItem("current"));
  const [query, setQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);

  function navigate(event) {
    const user = localStorage.getItem("current");
    if (user) {
      event.preventDefault();
    }
  }

  function logout() {
    localStorage.setItem("current", "");
    setUser("");
    nav("/");
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      nav(`/dashboard?search=${encodeURIComponent(query)}`);
    }
  };

  // Animation variants for hover effect
  const navItemVariants = {
    initial: { backgroundColor: "transparent" },
    hover: { backgroundColor: "rgba(255, 127, 80, 0.1)" }
  };

  // Handle navbar toggle
  const handleNavbarToggle = (expanded) => {
    setIsExpanded(expanded);
    // Reset hovered item when toggling navbar
    setHoveredItem(null);
  };

  // Update hoveredItem when window is resized
  useEffect(() => {
    const handleResize = () => {
      setHoveredItem(null);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate the position for the hover effect based on the current layout
  const calculateHoverPosition = (target) => {
    if (!navRef.current) return null;
    
    const rect = target.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    
    return {
      width: rect.width,
      height: rect.height,
      x: rect.left - navRect.left,
      y: rect.top - navRect.top
    };
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        className="bg-body-tertiary" 
        onToggle={handleNavbarToggle}
        expanded={isExpanded}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ color: "coral", fontWeight: "bold" }}
            >
              Online Auction
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 position-relative"
              style={{ maxHeight: "100px" }}
              navbarScroll
              ref={navRef}
            >
              {hoveredItem && (
                <motion.div
                  className="position-absolute"
                  initial={false}
                  animate={{
                    width: hoveredItem.width,
                    height: hoveredItem.height,
                    x: hoveredItem.x,
                    y: hoveredItem.y,
                    opacity: 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  style={{
                    backgroundColor: 'rgba(255, 127, 80, 0.1)',
                    borderRadius: '0.25rem',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                />
              )}
              
              <MotionNavLink 
                as={Link} 
                to="/"
                className="rounded px-2 my-1 d-flex align-items-center position-relative z-1"
                onMouseEnter={(e) => {
                  setHoveredItem(calculateHoverPosition(e.currentTarget));
                }}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setHoveredItem(null)}
              >
                Home
              </MotionNavLink>
              
              <MotionNavLink 
                as={Link} 
                to="/dashboard"
                className="rounded px-2 my-1 d-flex align-items-center position-relative z-1"
                onMouseEnter={(e) => {
                  setHoveredItem(calculateHoverPosition(e.currentTarget));
                }}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setHoveredItem(null)}
              >
                Dashboard
              </MotionNavLink>
              
              <MotionNavLink 
                as={Link} 
                to="/postAuction"
                className="rounded px-2 my-1 d-flex align-items-center position-relative z-1"
                onMouseEnter={(e) => {
                  setHoveredItem(calculateHoverPosition(e.currentTarget));
                }}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setHoveredItem(null)}
              >
                Post Auction
              </MotionNavLink>
              
              <MotionNavDropdown 
                title="Join us" 
                id="navbarScrollingDropdown"
                className="rounded px-2 my-1 d-flex align-items-center position-relative z-1"
                onMouseEnter={(e) => {
                  setHoveredItem(calculateHoverPosition(e.currentTarget));
                }}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setHoveredItem(null)}
              >
                <div className="p-1">
                  <MotionDropdownItem 
                    as={Link} 
                    to="/signIn" 
                    onClick={navigate}
                    initial="initial"
                    whileHover="hover"
                    variants={navItemVariants}
                    transition={{ duration: 0.2 }}
                    className="rounded px-2 py-1 my-1"
                  >
                    Sign in
                  </MotionDropdownItem>
                  <MotionDropdownItem 
                    as={Link} 
                    to="/signUp" 
                    onClick={navigate}
                    initial="initial"
                    whileHover="hover"
                    variants={navItemVariants}
                    transition={{ duration: 0.2 }}
                    className="rounded px-2 py-1 my-1"
                  >
                    Create Account
                  </MotionDropdownItem>
                  {user && <NavDropdown.Divider />}
                  {user && (
                    <MotionDropdownItem 
                      onClick={logout}
                      initial="initial"
                      whileHover="hover"
                      variants={navItemVariants}
                      transition={{ duration: 0.2 }}
                      className="rounded px-2 py-1 my-1"
                    >
                      <img
                        src="/right-from-bracket-solid.svg"
                        alt="logout"
                        width={20}
                      />{" "}
                      Log out
                    </MotionDropdownItem>
                  )}
                </div>
              </MotionNavDropdown>
            </Nav>
            
            <Form onSubmit={handleSearch} className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" variant="outline-success">
                  Search
                </Button>
              </motion.div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ position: "relative", minHeight: "calc(100vh - 130px)" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
            <Route path="/postAuction" element={<PageTransition><PostAuction /></PageTransition>} />
            <Route path="/signIn" element={<PageTransition><SignIn setUser={setUser} /></PageTransition>} />
            <Route path="/signUp" element={<PageTransition><SignUp setUser={setUser} /></PageTransition>} />
            <Route path="/edit" element={<PageTransition><Edit /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </div>

      <footer>
        <p>&copy; {year} Auction App. All rights reserved.</p>
        <p>Welcome to the best place to buy and sell items through auctions!</p>
      </footer>
    </>
  );
}

export default App;