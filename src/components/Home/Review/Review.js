import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
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