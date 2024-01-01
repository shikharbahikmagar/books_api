import { useEffect, useState } from 'react'
import './App.css'
import Books from './components/Books'

function App() {
  const [books, setJoke] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech')
      .then((resp) => resp.json())
      .then((book) => {
        setJoke(book.data.data)

      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className= 'max-w-screen h-screen rounded-lg'
      style={{ backgroundColor: 'black' }}>
      <h1 className='w-full my-5 flex bg-sky-500 justify-center text-white text-lg rounded-lg p-4'>Books For Techs</h1>
      
        {books.map((book) => (
          <div key={book.id} className='bg-green-500 flex mx-8 my-2 p-4 rounded-lg'>
            <h1 className='flex w-full text-white'>{book.volumeInfo.title}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default App
