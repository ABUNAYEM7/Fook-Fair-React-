import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ book }) => {
  return (
    <Link to={`Cards/${book.bookId}`}>
    <div className="card hover:scale-105 duration-300 shadow-xl  hover:outline-green-500 hover:outline-double px-6 w-96 h-[510px]">
      <figure className="px-4 pt-4">
        <img
          src={book.image}
          className="rounded-xl h-64 "
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center gap-4">
            {book.tags.map((tag,index)=><span key={index} className="p-2 bg-green-200 text-green-700 rounded-2xl ">{tag}</span> )}
        </div>
        <h2 className="card-title">{book.bookName}</h2>
        <p className="text-xl font-medium">By : {book.author}</p>
        <div className="w-full my-1 border-b-2 border-dashed"></div>
        <div className="w-full flex items-center justify-between">
            <p className="text-xl font-medium">{book.category}</p>
            <p className="text-xl font-medium flex items-center gap-1">{book.rating} <span><FaStarHalfAlt /></span></p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Cards;
