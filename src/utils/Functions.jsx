import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export const getHeartIcon = (isFavourite, size) => {
    if (isFavourite) {
        return <FontAwesomeIcon icon={fasHeart} size={size} style={{ color: "#FFFFFF" }} />
    }
    return <FontAwesomeIcon icon={farHeart} size={size} style={{ color: "#FFFFFF" }} />
}

export const average = arr => {
    return arr.reduce((a, b) => a + b) / arr.length
}

export const getMenuUrl = str => {
    let cleanedUpString = (str.split("'").join("")).split(" ").join("-")
    return cleanedUpString.toLowerCase();
}

export const getDeliveryTimeSpan = deliveryTime => {
    return <span>{deliveryTime}-{deliveryTime + 10} Min</span>
}

export const getDeliveryFeeSpan = (freeDelivery, deliveryFee) => {
    if (!deliveryFee) {
        return;
    } else if (freeDelivery === true) {
        return (
            <><span className="text-muted" style={{ textDecoration: "line-through" }}>${deliveryFee}</span><span> $0 Delivery Fee</span></>
        )
    }
    return (
        <span>${deliveryFee.toFixed(2)} Delivery Fee</span>
    )
}

export const getRatingSpan = rating => {
    if (rating > 4.5) {
        return (
            <span className="rounded-circle text-center float-right" style={{ fontSize: "14px", backgroundColor: "#E6F2ED", color: "#05A357", width: "40px", height: "40px", padding: "8px" }}>
                {rating.toFixed(1)}
            </span>
        )
    }
    return (
        <span className="rounded-circle text-center float-right" style={{ fontSize: "14px", backgroundColor: "#EEEEEE", color: "#000000", width: "40px", height: "40px", padding: "8px" }}>
            {rating.toFixed(1)}
        </span>
    )
}

export const getPriceRangeSpan = allMealsArray => {
    const priceArray = [];

    if (!allMealsArray) {
        return
    } else {
        allMealsArray.forEach(item => {
            priceArray.push(item.price)
        })
    }

    let averagePrice = average(priceArray);

    if (averagePrice < 20) {
        return <span>$</span>
    } else if (averagePrice < 30) {
        return <span>$$</span>
    }
    return <span>$$$</span>
}


