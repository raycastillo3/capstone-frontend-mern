import "../styles/category.css";
import { CategoryCard } from "./CategoryCard";

export function Category() {
  const categories = [
    {
      id: 1,
      categoryName: "Dairy",
    },
    {
      id: 2,
      categoryName: "Fruits",
    },
    {
      id: 3,
      categoryName: "Vegetables",
    },
    {
      id: 4,
      categoryName: "Grains",
    },
    {
      id: 5,
      categoryName: "Protein",
    },
    {
      id: 6,
      categoryName: "Sweets",
    },
    {
      id: 7,
      categoryName: "Beverages",
    },
    {
      id: 8,
      categoryName: "More...",
    },
  ];
  // console.log(categories);
  return (
    <>
      <h2 className="title">Categories</h2>
      <div className="category-container">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            categoryName={category.categoryName}
          />
        ))}
      </div>
    </>
  );
}
