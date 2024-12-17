import '../styles/footer.css'
export function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <h3>About</h3>
          <ul>
            <li><a href="#">About S. Overflow</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Trust & Safety</a></li>
            <li><a href="#">Content Guidelines</a></li>
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#">Your Privacy Choices</a></li>
          </ul>
        </div>

        <div className="column">
          <h3>Discover</h3>
          <ul>
            <li><a href="#">Snack Overflow Project Cost Guides</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Talk</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Snack Overflow Blog</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Snack Overflow Mobile</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">RSS</a></li>
          </ul>
        </div>

        <div className="column">
          <h3>Snack Overflow for Business</h3>
          <ul>
            <li><a href="#">Snack Overflow for Business</a></li>
            <li><a href="#">Business Owner Login</a></li>
            <li><a href="#">Claim your Business Page</a></li>
            <li><a href="#">Advertise on Snack Overflow</a></li>
            <li><a href="#">Snack Overflow for Restaurant Owners</a></li>
            <li><a href="#">Table Management</a></li>
            <li><a href="#">Business Success Stories</a></li>
            <li><a href="#">Business Support</a></li>
            <li><a href="#">Snack Overflow Blog for Business</a></li>
            <li><a href="#">Snack Overflow Data for B2B</a></li>
            <li><a href="#">Snack Overflow Data for B2C</a></li>
          </ul>
        </div>

        <div className="column">
          <h3>Languages</h3>
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="zh">Mandarin</option>
          </select>
          <h3>Cities</h3>
          <select>
            <option value="explore">Explore a City</option>
            <option value="explore">New York</option>
            <option value="explore">Los Angeles</option>
            <option value="explore">Boston</option>
          </select>
        </div>
      </div>
    </footer>
  );
};
