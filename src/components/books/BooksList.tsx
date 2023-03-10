import { Book } from "./Book";
import { SadBook, BookPlaceholder } from "../../assets/assets";

/**
 * @description Defines the props for the BooksList component
 * 
 * @interface BooksListProps
 * @memberof BooksList
 * 
 * @property {any} books - The books to display
 */
interface BooksListProps {
  books: any;
}

/**
 * @description The BooksList component, that display a list of books.
 * 
 * @param {BooksListProps} props - The props of the component
 * 
 * @returns {JSX.Element} - The component
 * 
 * @memberof BooksList
 * 
 * @example
 * <BooksList books={books} />
 */
export const BooksList = ({books}: BooksListProps) => {
  return (
    <div className="books_list">
        {!books || books.length == 0 ?
          <div className="error">
            <img className="error__icon" src={SadBook}/>
            <h1>No books found.</h1>
          </div>
          :
          books.map((book: any) => {
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
                  previewLink={book.volumeInfo.previewLink}
                />
              );
            }
        )}
    </div>
  );
};
