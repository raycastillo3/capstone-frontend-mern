import "../styles/gallery.css";
import {ActivityBar} from "./ActivityBar";
import {GalleryCard} from "./GalleryCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Gallery() {
  const restaurantData = [
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://d1ralsognjng37.cloudfront.net/028932d2-8d93-41a5-8796-2b74a7ea1822.jpeg",
},
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://d1ralsognjng37.cloudfront.net/028932d2-8d93-41a5-8796-2b74a7ea1822.jpeg",
},
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://d1ralsognjng37.cloudfront.net/028932d2-8d93-41a5-8796-2b74a7ea1822.jpeg",
},
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://d1ralsognjng37.cloudfront.net/028932d2-8d93-41a5-8796-2b74a7ea1822.jpeg",
},
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://d1ralsognjng37.cloudfront.net/028932d2-8d93-41a5-8796-2b74a7ea1822.jpeg",
},

]
return (
  <>
  <h2 className="title"> Recent Activity</h2>
  <ActivityBar/>
  <div className="container mt-4"> 
      <Row>
          {restaurantData.map((restaurant) => (
            <Col md={6}>
              <GalleryCard key={restaurant.id} name={restaurant.name} rating={restaurant.rating} price={restaurant.price} imageSrc={restaurant.imageSrc}/>
            </Col>         
          ) )}
      </Row>
  </div>
  </>
);
}
