import "../styles/discover.css";

export function Discover() {
  return (
    <>
    <h1 className="title"> Discover Places</h1>
    <div className="discover-container">
      <div className="section">
        <div className="content">
          <h1>Everything you crave, delivered.</h1>
          <h3>Your favorite local restaurants</h3>
          <p>
            Get a slice of pizza or the whole pie delivered, or pick up house lo
            mein from the Chinese takeout spot you've been meaning to try.
          </p>
          <button className="btn">Find restaurants</button>
        </div>
        <div className="image-container">
          <img
            src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png"
            alt="Person eating pizza"
          />
        </div>
      </div>

      <div className="section section-reverse">
        <div className="content">
          <h1>Delivery for less</h1>
          <p>
            Members get a $0 delivery fee on pass orders, 5% back on pickup
            orders, and so much more. Plus, it's free for 30 days.
          </p>
          <button className="btn">Get Pass</button>
        </div>
        <div className="image-container">
          <img
            src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png"
            alt="Assorted food items"
          />
        </div>
      </div>
    </div>
    </>
  );
}
