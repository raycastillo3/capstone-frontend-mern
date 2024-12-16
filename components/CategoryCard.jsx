import "../styles/categoryCard.css";

// eslint-disable-next-line react/prop-types
export function CategoryCard({categoryName, categoryImage}) {
    return (
        <>
            <div className="category-card">
            <img src={categoryImage} />
            <p>{categoryName} </p>
            </div>
        </>
    )
}
