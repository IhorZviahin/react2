import StarRatings from "react-star-ratings/build/star-ratings";

function StarsRating({vote_average}) {

    return (
        <div className="StarsRating">
            <StarRatings
                rating={vote_average/2}
                starRatedColor="orange"
                starDimension="20px"
                starSpacing="5px"
            />
        </div>
    );
};

export {StarsRating};