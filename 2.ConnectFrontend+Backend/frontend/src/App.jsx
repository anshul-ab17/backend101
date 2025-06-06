import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        setBooks(response.data)
      })
      .catch(error => {
        console.error('Error fetching books:', error)
      })
  })

  return (
    <>
      <h1>Books</h1>
      <p>Books: {books.length}</p>

      {
        books.map((book, index) => (
          <ul key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </ul>
        ))
      }



    </>
  )
}

export default App
