import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const CardsContainer = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('bookData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
  return (
    <div className='my-6 p-4'>
       <h3 className='text-5xl font-bold my-4 text-center'>Books</h3>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
       {
        books.map(book=><Cards key={book.bookId} book ={book}/>)
       }
       </div>
    </div>
  )
}

export default CardsContainer
