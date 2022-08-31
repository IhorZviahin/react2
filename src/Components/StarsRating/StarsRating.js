import StarRatings from "react-star-ratings/build/star-ratings";

import css from "./StarsRating.module.css"

function StarsRating({vote_average}) {

    return (
        <div className={css.StarRatings}>
            <StarRatings
                rating={vote_average / 2}
                starRatedColor="orange"
                starDimension="15px"
                starSpacing="5px"
            />
        </div>
    );
};

export {StarsRating};