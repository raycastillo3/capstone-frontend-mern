import "../styles/galleryCard.css";
// eslint-disable-next-line react/prop-types
export function GalleryCard({ content }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="avatar">R</div>
          <div className="card-title">
            <h3>Shrimp and Chorizo Paella</h3>
            <p>September 14, 2016</p>
          </div>
          <div className="menu">⋮</div>
        </div>
        <img
          className="card-image"
          src="../paella.jpg"
          alt="Shrimp and Chorizo Paella"
        />
        <div className="card-content">
          <p>{content}</p>
        </div>
        <div className="card-footer">
          <button className="icon-button">❤️</button>
          <button className="icon-button">🔗</button>
        </div>
      </div>
    </>
  );
}
