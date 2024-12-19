import "../styles/category.css";
import { CategoryCard } from "./CategoryCard";
import { useNavigate } from "react-router-dom";


export function Category() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      categoryName: "Dairy",
      image: "https://static.vecteezy.com/system/resources/previews/024/244/720/non_2x/dairy-icon-in-illustration-vector.jpg"
    },
    {
      id: 2,
      categoryName: "Fruits",
      image: "https://cdn-icons-png.flaticon.com/512/1625/1625048.png"
    },
    {
      id: 3,
      categoryName: "Vegetables",
      image: "https://cdn-icons-png.freepik.com/256/9862/9862079.png?semt=ais_hybrid"
    },
    {
      id: 4,
      categoryName: "Grains",
      image: "https://cdn-icons-png.flaticon.com/512/3967/3967367.png"
    },
    {
      id: 5,
      categoryName: "Protein",
      image: "https://cdn-icons-png.flaticon.com/512/7126/7126704.png"
    },
    {
      id: 6,
      categoryName: "Sweets",
      image: "https://cdn-icons-png.flaticon.com/512/3081/3081949.png"
    },
    {
      id: 7,
      categoryName: "Beverages",
      image: "https://cdn-icons-png.flaticon.com/512/5029/5029080.png"
    },
    {
      id: 8,
      categoryName: "More...",
      image: "https://s3-media0.fl.yelpcdn.com/assets/public/40x40_more_v2.yji-961fdce2fd036f85fb01.svg"
    },
  ];

 
  return (
    <>
      <h2 className="title">Categories</h2>
      <div className="category-container">
        {categories.map((category) => (
         
            <CategoryCard
            key={category.id}
            categoryImage={category.image}
            categoryName={category.categoryName}
          />

        ))}
      </div>
    </>
  );
}
