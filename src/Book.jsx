
import { data } from './Books'
import './index.css';

const BookList = () => {
    return (
        <span>
            {data.map((book) => {
                // const {img, title,author,type,price} = book
                return <Book key = {book.id} {...book}></Book>
            })}
        </span>
    );
}

const wishList = (id) => {
    data.map((book) => {
        if(id === book.id) {
            alert(`"${book.title}" is added to your wishlist`);
        }
    })    
}

// eslint-disable-next-line react/prop-types
const Book =({id,img, title, author, type, price,info}) => {
    // console.log(title);
    return (
        <article className='books'>
            <div>
                <div className="image">
                    <img src={img}  alt="Book"/>
                </div>
                <h1 className='title'>{title}</h1>
                <h5 className='author'>{author}</h5>
                <h4 className='type'>{type}</h4>
                <h6 className='price'>${price}</h6>
                <button className="btn" onClick ={() => wishList(id)}>Add to wishlist</button>
            </div>
            <p className='info'>{info}</p>
        </article>
    );
}

export default BookList;