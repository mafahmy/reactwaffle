import React from "react";
import Shelf from "./Shelf"; // Importing shelf
import PropTypes from "prop-types";
// setting books, moveBook function as props

function Shelves({ books, moveBook }) {
  Shelves.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
  };

  // filtering the books to each shelf
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  // passing the props to Shelf,

  return (
    <div>
      <Shelf
        title="Currently Reading"
        books={currentlyReading}
        moveBook={moveBook}
      />
      <Shelf title="Want to Read" books={wantToRead} moveBook={moveBook} />
      <Shelf title="Read" books={read} moveBook={moveBook} />
    </div>
  );
}
export default Shelves;
