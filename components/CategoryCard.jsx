import "../styles/categoryCard.css";

// eslint-disable-next-line react/prop-types
export function CategoryCard({categoryName}) {
    return (
        <>
            <div className="category-card">{categoryName}</div>
        </>
    )
}
