import { useState } from "react"

const Bookshelf = () => {
      const [books,setBooks] = useState([])
      const [newBook, setNewBook] =useState({
        title:'',
        author:'',
      })

      const handleInputChange =(event) => {
        console.log(event.target)
        setNewBook({...newBook, [event.target.name]: event.target.value})
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        console.log('Submitted')
        setNewBook({title:'',author:''})

      }
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title"> Title</label>
                    <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange}/>
                    <label htmlFor="author">Author</label>
                    <input type="text" id='author' name='author' value={newBook.author} onChange={handleInputChange}/>
                    <button type='submit'>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {/* Book cards will display here */}
                <ul>
                    {books.map((book,index)=> (
                        <li key={index}className="bookCard">
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Bookshelf
