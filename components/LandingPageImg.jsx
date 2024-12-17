import "../styles/landingPageImg.css";
import { SearchBar } from "./SearchBar";

export function LandingPageImg () {
    return (
        <div className="hero">
        <div className="hero-content">
          <h1>Order delivery near you</h1>
          <SearchBar />
          <p className="signin-link">
            Or <a href="#">Sign In</a>
          </p>
        </div>
      </div>
    )
}