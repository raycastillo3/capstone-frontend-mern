import "../styles/navbar.css";
import { useState, useEffect } from "react";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos === 0) {
      setShowNavbar(false);
    } else if (currentScrollPos > prevScrollPos) {
      setShowNavbar(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const toggleLogInModal = () => {
    setIsLogInModalOpen(!isLogInModalOpen);
  };

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="logo">
        <img src="../snackoverflow.png" alt="logo" />
      </div>
      <div className="nav-buttons">
        <button
          type="button"
          className="nav-btn log-in"
          onClick={toggleLogInModal}
        >
          Log in
        </button>
        <button
          type="button"
          className="nav-btn sign-up"
          onClick={toggleSignUpModal}
        >
          Sign Up
        </button>
      </div>
      {isLogInModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Log In</h5>
              <button
                type="button"
                className="close"
                onClick={toggleLogInModal}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleLogInModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
      {isSignUpModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button
                type="button"
                className="close"
                onClick={toggleSignUpModal}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputFirstName1"
                    aria-describedby="emailHelp"
                    placeholder="Enter First Name"
                  />
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputLastName1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Last Name"
                  />
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      )}
    </nav>
  );
}
