import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaThumbsUp } from 'react-icons/fa'; 

export function GalleryCard ({ name, rating, price, imageSrc }) {
  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={`filled-${i}`} className="text-warning">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-warning">☆</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>);
    }
    return stars;
  };

  const renderDollarSigns = () => {
    let dollarSigns = "";
    for(let i = 0; i < price; i++){
        dollarSigns += "$";
    }
    return dollarSigns;
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Row className="align-items-center"> 
          <Col xs="auto">
            <div className="d-flex align-items-center">
              {renderStars()}
              <span className="ms-2 text-muted">650</span> 
            </div>
          </Col>
        </Row>
        <Card.Text>
            {renderDollarSigns()} • Steakhouses
        </Card.Text>
        <Card.Img variant="top" src={imageSrc} alt={name} style={{ height: '220px', width: '100%', objectFit: 'cover' }}/>
        <Card.Footer className="bg-white border-top-0">
          <FaThumbsUp size={20} />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
