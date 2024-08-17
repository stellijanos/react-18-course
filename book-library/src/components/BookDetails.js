import React, { useContext} from "react";
import { BooksContext } from "../context/booksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
    const { bookId } = useParams();
    const books = useContext(BooksContext);

    const book = books.find((b) => b.id === parseInt(bookId));
    console.log(book);

    if (books.length === 0) {
        return <div>Loading...</div>
    }

    if (!book) {
        return (<div>Book Not found!</div>)
    }

    return (
        <div>
            <p>{book.title} by {book.author}</p>
            <p>Description: {book.description}</p>
        </div>
    );
}
