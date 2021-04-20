import React from 'react';

const ReviewDetail = ({ review }) => {
    return (
        <div className="container">
            <div className="col-md-3">
                <h5 style={{ textAlign: 'center', color: 'blue' }}>{review.name}</h5>
                <div className="card">
                    <div className="card-body">
                        <h6>Company:{review.company}</h6>
                        <p>{review.feedback} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;