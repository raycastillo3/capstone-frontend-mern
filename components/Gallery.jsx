import "../styles/gallery.css";
import ActivityBar from "./ActivityBar";
import {GalleryCard} from "./GalleryCard";

export function Gallery() {
  const galleries = [
    {
      id: 1,
      content: "This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      id: 2,
      content: "This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen."
    },
    {
      id: 3,
      content: "This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      id: 4,
      content: "This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      id: 5,
      content: "This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      id: 6,
      content: "This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
      id: 7,
      content: "This impressive This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
  ]
    return (
      <>
        <h2 className="title">Recent Activity</h2>
        <ActivityBar/>
        <div className="gallery-container">
          {galleries.map((gallery) => (
            <GalleryCard key={gallery.id} content={gallery.content}/>
          ))}
        </div>
      </>
  );
}
