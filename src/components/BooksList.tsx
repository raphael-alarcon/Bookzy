import { Book } from "./Book";
import SadBook from "../assets/sad-book.svg";
import BookPlaceholder from "../assets/book-placeholder.svg";

export const BooksList = (props: any) => {
  return (
    <div className="books_list">
        {!props.books || props.books.length == 0 ?
          <div className="error">
            <img className="error__icon" src={SadBook}/>
            <h1>No books found.</h1>
          </div>
          :
          props.books.map((book: any) => {
              return (
                <Book
                  key={book.id}
                  name={book.volumeInfo.title || "Untitled book"}
                  synopsis={book.volumeInfo.description ?? "No synopsis available."}
                  image={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : BookPlaceholder
                  }
                />
              );
            }
        )}
    </div>
  );
};
