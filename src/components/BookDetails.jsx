import {  useLoaderData } from "react-router-dom";
import { setData,storeWishListData } from "./utility/utility";


const BookDetails = () => {
  const book = useLoaderData() 
  
  const readHandler=(id)=>{
    setData(id)
  }
  const wishHandler=(id)=>{
    storeWishListData(id)
  }

  if (!book) return <p>Loading book details...</p>;

  return (
    <div className="card  shadow-xl md:flex-row border-2 border-black">
      <figure className="px-10 py-6 md:max-h-[680px]">
        <img src={book.image} className="rounded-xl h-full" />
      </figure>
      <div className="md:w-1/2 w-full card-body items-center p-5">
        <h2 className="card-title">{book.bookName}</h2>
        <p className="text-xl font-medium">By : {book.author}</p>
        {/* tags-container */}
         <div className="flex items-center gap-4">
            <h3 className="text-xl font-medium">Tags :</h3>
          {book.tags && book.tags.map((tag, index) => (
            <span
              key={index}
              className="p-2 md:px-6 px-3  bg-green-200 text-green-700 rounded-2xl "
            >
              {tag}
            </span>
          ))}
        </div> 
        <div>
            <h3>Review : {book.review}</h3>
        </div>
        <div className="w-full my-1 border-b-2 border-dashed"></div>
        {/* info-container */}
        <div className="w-full flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h3>Number Of Pages :</h3>
                <h3 className="text-lg font-medium">{book.totalPages}</h3>
            </div>
            <div className="flex items-center justify-between">
                <h3>Publisher :</h3>
                <h3 className="text-lg font-medium">{book.publisher}</h3>
            </div>
            <div className=" flex items-center justify-between">
                <h3>Year Of Publish :</h3>
                <h3 className="text-lg font-medium">{book.yearOfPublishing}</h3>
            </div>
            <div className=" flex items-center justify-between">
                <h3>Rating :</h3>
                <h3 className="text-lg font-medium">{book.rating}</h3>
            </div>
         </div>
         {/* buttons-container */}
         <div className="flex items-center gap-2 my-2">
            <button 
             onClick={()=>readHandler(book.bookId)}
             className="btn px-6 border-2 border-blue-500">Read</button>
            <button
            onClick={()=>wishHandler(book.bookId)}
              className="btn px-6 border-2 bg-blue-500 ">WishList</button>
         </div>
      </div>
    </div>
  );
};

export default BookDetails;
