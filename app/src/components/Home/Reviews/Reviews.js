import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../../../features/productSlice';

export default function Reviews({
    reviews,
    renderRating,
    starRating
}) {

    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState({
        author: '',
        email: '',
        message: '',
        rating: '',
    })

    const onFormValuesChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onReviewPost = (e) => {
        e.preventDefault();

        dispatch(addReview(formValues))

        setFormValues({
            author: '',
            email: '',
            message: '',
            rating: '',
        })
    }

    return (
        <div className="product-reviews">
            <h2>Reviews</h2>


            <form className="review-form" onSubmit={onReviewPost}>
                <div className="review-stars-container">
                    {renderRating(starRating)}
                </div>
                <div className="review-form-container">
                    <div className="review-form-container-inner">
                        <label htmlFor="name">Name</label>
                        <input name='author' placeholder="Type name..." type='text' value={formValues.author} onChange={onFormValuesChange} />
                    </div>
                    <div className="review-form-container-inner" id='review-form-email-container'>
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="Type email..." type='email' value={formValues.email} onChange={onFormValuesChange} />
                    </div>
                </div>
                <div className="review-form-message-container">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder='Type message...' name='message' value={formValues.message} onChange={onFormValuesChange}></textarea>
                </div>

                <button type='submit' className="add-review-btn">Add Review</button>
            </form>

            <div className="added-reviews-container">
                {reviews.map((review, index) => {
                    return (
                        <div className="review" key={index}>
                            <h2>{review.author} &lt;{review.email}&gt;</h2>
                            <div className="review-stars-container">
                                {renderRating(review.rating)}
                            </div>
                            <p>{review.message}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}