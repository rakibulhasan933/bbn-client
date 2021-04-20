import React from 'react';
import { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://pure-coast-41590.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="row container">
            {
                review.map(review => <ReviewDetail review={review} ></ReviewDetail>)
            }
        </div>
    );
};

export default Review;