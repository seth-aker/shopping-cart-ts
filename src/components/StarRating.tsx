import { Star } from "./Star";

type StarRatingProps = {
    rating: number
}

export function StarRating({rating}: StarRatingProps) {
    const roundedRating = Math.round(rating);
    const stars: JSX.Element[] = [];
    while(stars.length < 5) {
        if(stars.length < roundedRating) {
            stars.push(<Star fill={true}></Star>)
        } else {
            stars.push(<Star fill={false}></Star>)
        }
    }
    return stars;
    
}