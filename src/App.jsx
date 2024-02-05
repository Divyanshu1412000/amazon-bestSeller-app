// import { useState } from 'react';
// import './App.css'
import BookList from './Book'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section className="header">
        <h1>Amazon Best Sellers</h1>
        <h4>Our most popular products based on sales. Updated frequently.</h4>
      </section>
      <article className = "main-container">
        <div className = "left-container">
          <a href="#">Any Department</a>
          <ul className = "Topics">
            Books
            <li><a href="#">Arts & photography</a></li>
            <li><a href="#">Adventure</a></li>
            <li><a href="#">Thriller</a></li>
            <li><a href="#">Comedy</a></li>
            <li><a href="#">Sci-fi</a></li>
          </ul>
        </div>

        <div className="right-container">
          <section className='heading'>
            <h1>Best Sellers in Books</h1>
          </section>

          <section>
            <BookList />
          </section>

        </div>
        
      </article>
    </>
  )
}

export default App
