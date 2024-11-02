import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoreData, markAsReadHandler } from "./utility/utility";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "./WishList";

const ReadList = () => {
  const data = useLoaderData();
  const [book, setBook] = useState([]);
  const [sort, setSort] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const storedList = getStoreData();
    const storedId = storedList.map((id) => parseInt(id));
    const storedBook = data.filter((book) => storedId.includes(book.bookId));
    setBook(storedBook);
  }, []);

  const removeHandler = (id) => {
    const updatedList = book.filter((book) => book.bookId !== id);
    setBook(updatedList, id);
    markAsReadHandler(id);
  };

  // sort-rating-handler
  const sortHandler = (sorType) => {
    setSort(sorType);

    if (sort === "rating") {
      const sortedByRating = [...book].sort((a, b) => b.rating - a.rating);
      setBook(sortedByRating);
      setIsOpen(false);
    } else if (sort === "totalPages") {
      const sortedByRating = [...book].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setBook(sortedByRating);
      setIsOpen(false);
    } else if (sort === "date") {
      const sortedByRating = [...book].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setBook(sortedByRating);
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div className="text-center mb-16">
        {/* sorted-dropDown */}
        <details
          className="dropdown"
          open={isOpen}
          onToggle={(e) => setIsOpen(e.target.open)}
        >
          <summary
            onClick={() => setIsOpen(!open)}
            className="btn m-1 px-6 bg-green-500 text-white hover:text-green-500"
          >
            {sort ? `sort by ${sort}` : "Sort By"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <Link onClick={() => sortHandler("rating")}>Rating</Link>
            </li>
            <li>
              <Link onClick={() => sortHandler("totalPages")}>
                Number Of Pages
              </Link>
            </li>
            <li>
              <Link onClick={() => sortHandler("date")}>Publisher Year</Link>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-center text-2xl font-bold ">Read Listed Books</h3>
          <div className="my-6">
            {(book.length === 0) &&
            (
              <h3 className="my-6 text-center text-2xl font-bold text-red-500">
                No Book Added To Read List
              </h3>
            )}
            {book.map((book) => (
              <div
                key={book.bookId}
                className="w-11/12 my-6 p-4 shadow-xl flex md:flex-row space-y-6 flex-col items-center  justify-between rounded-md border-2"
              >
                <div className="flex md:flex-row flex-col md:items-center gap-2">
                  <div>
                    <img
                      className="h-32 w-32 rounded-xl"
                      src={book.image}
                      alt={book.name}
                    />
                  </div>
                  <div>
                    <h3>
                      Author :
                      <span className="text-lg font-medium">
                        
                        {book.author}
                      </span>
                    </h3>
                    <h3>
                      Publisher :
                      <span className="text-lg font-medium">
                        
                        {book.publisher}
                      </span>
                    </h3>
                    <h3>
                      Pages :
                      <span className="text-lg font-medium">
                        {book.totalPages}
                      </span>
                    </h3>
                    <h3>
                      Rating :
                      <span className="text-lg font-medium">{book.rating}</span>
                    </h3>
                    <h3>
                      Publishing Year :
                      <span className="text-lg font-medium">
                        {book.yearOfPublishing}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="flex md:items-center items-start">
                  <button
                    onClick={() => removeHandler(book.bookId)}
                    className="btn px-6 bg-[#59C6D2] "
                  >
                    Mark as Read
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
