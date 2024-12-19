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
    imageSrc: "https://d1ralsognjng37.cloudfront.net/7896b961-52d2-4fab-a37e-6cb8526f6736.jpeg",
},
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://d1ralsognjng37.cloudfront.net/d29a9000-fcbe-49ea-acd0-c039bf85d4f2.webp",
},
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://duyt4h9nfnj50.cloudfront.net/resized/1528911206513-w240-f9.jpg",
},
    {
    id: 1,
    name: "Wolfgang's Steakhouse",
    rating: 4,
    price: 4,
    imageSrc: "https://d1ralsognjng37.cloudfront.net/e08598ef-9897-44bc-b439-a10d20b7f1e9.jpeg",
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
