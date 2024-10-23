import { useState } from 'react'
import { Rating, ThinStar } from '@smastrom/react-rating'
//This is the rating component made by Yasemin


//This is the styler for the rating. Gives color to teh starts when clicked on and hovered.
const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#f2e641',
    inactiveFillColor: '#ebe598'
}
//Description for all ratings from 1-5 stars and when none given
function getRating(rating) {
    switch (rating) {
        case 1:
            return 'Terrible :(';
        case 2:
            return 'Bad';
        case 3:
            return 'Average';
        case 4:
            return 'Good';
        case 5:
            return 'Excellent :)';
        //Default is when there is no rating given
        default:
            return 'Not finished';
    }
}

export default function Rate() {
    //useState to change the rating given. Initial state can be 0-5.
    //Button to reset our rating to the original state (Which is none "0")
    //Function call to getRating with the user input.
    const [rating, setRating] = useState(0)
    return (
        <>
            <Rating style={{maxWidth: 200}}
                    value={rating}
                    onChange={setRating}
                    itemStyles={myStyles}/>
            <div>
                <div>{`Selected: ${getRating(rating)}`}</div>
            </div>
            <br/>
            <button onClick={() => setRating(0)}>
                Reset
            </button>
        </>
    );
}
