import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoreWishList, removeItem } from './utility/utility'

const WishList = () => {
    const data = useLoaderData()
    const [book,setBook] = useState([])

    useEffect(()=>{
        const storedData = getStoreWishList()
        const storedId = storedData.map(id=> parseInt(id))
        const storedWishList = data.filter(book=> storedId.includes(book.bookId))
        setBook(storedWishList)
    },[])
    // remove-button-handler
    const removeHandler =(id)=>{
        const updatedList = book.filter(book=> book.bookId !== id)
        setBook(updatedList)
        removeItem(id)
    }
    
    if (book.length === 0)
        return (
          <h3 className="my-6 text-center text-2xl font-bold text-red-500">
            No Book Added To Read List
          </h3>)
  return (
    <div>
        <h3 className='text-center text-2xl font-bold '>Wish Listed Books</h3>
        <div className='my-6'>
      {book.map(book=>
      
      <div key={book.bookId} className='w-11/12 my-6 p-4 shadow-xl flex md:flex-row space-y-6 flex-col items-center  justify-between rounded-md border-2'>
            <div className='flex md:flex-row flex-col md:items-center gap-2'>
            <div>
                <img className='h-32 w-32 rounded-xl' src={book.image} alt={book.name} />
            </div>
            <div>
                <h3>Author :<span className='text-lg font-medium'> {book.author}</span></h3>
                <h3>Publisher : <span className='text-lg font-medium'> {book.publisher}</span></h3>
                <h3>Pages :<span className='text-lg font-medium'>  {book.totalPages}</span></h3>
                <h3>Pages :<span className='text-lg font-medium'> {book.rating}</span></h3>
            </div>
            </div>
            <div className='flex md:items-center items-start'>
                <button
                onClick={()=>removeHandler(book.bookId)}
                 className='btn px-6 bg-[#59C6D2]'>Remove</button>
            </div>
      </div>)}
    </div>
    </div>
  )
}

export default WishList
