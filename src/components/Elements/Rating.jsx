export default function Rating({ rating }) {

    let ratingArray = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingArray[i] = true;
    }

    return (
        <>
            { ratingArray.map((value, index) => {
                return value ?
                    (<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>)
                    :
                    (<i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>);
            }) }
        </>
    )
}

// Here what we did is, we created an array of 5 elements and filled all those indexes with false
// then we accept rating and whatever its value is, that many times we loop using for loop and 
// change ratingArray's index to true. And then we loop/map over our ratignArray and if it's true then
// render this else render that.