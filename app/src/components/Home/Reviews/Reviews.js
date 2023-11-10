import starActive from '../../../content/Icons/star-active.png';
import starInactive from '../../../content/Icons/star-inactive.png';



export default function Reviews() {
    return (
        <div className="product-reviews">
            <h2>Reviews</h2>

            <div className="review-stars-container">
                <img src={starActive} className="review-star" />
                <img src={starActive} className="review-star" />
                <img src={starActive} className="review-star" />
                <img src={starActive} className="review-star" />
                <img src={starInactive} className="review-star" />
            </div>

            <form className="review-form">
                <div className="review-form-container">
                    <div className="review-form-container-inner">
                        <label htmlFor="name">Name</label>
                        <input name='name' placeholder="Type name..." type='text' />
                    </div>
                    <div className="review-form-container-inner" id='review-form-email-container'>
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="Type email..." type='email' />
                    </div>
                </div>
                <div className="review-form-message-container">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder='Type message...'></textarea>
                </div>

                <button type='submit' className="add-review-btn">Add Review</button>
            </form>

            <div className="added-reviews-container">
                <div className="review">
                    <h2>John Doe &lt;john.doe@gmail.com&gt;</h2>
                    <div className="review-stars-container">
                        <img src={starActive} className="review-star" />
                        <img src={starActive} className="review-star" />
                        <img src={starActive} className="review-star" />
                        <img src={starActive} className="review-star" />
                        <img src={starInactive} className="review-star" />
                    </div>
                    <p>Example review</p>
                </div>
            </div>
        </div>
    )
}