import { useNavigate } from "react-router-dom";
import "../styles/categoryCard.css";

// eslint-disable-next-line react/prop-types
export function CategoryCard({categoryName, categoryImage}) {
    const navigate = useNavigate(); 
    
    const handleClick = () => {
        navigate('/feed'); 
      };
    return (
        <>
            <div className="category-card" onClick={handleClick} >
            <img src={categoryImage} />
            <p>{categoryName} </p>
            </div>
        </>
    )
}
