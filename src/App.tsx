import axios from "axios";
import { useState, useEffect, useRef } from "react";
import * as Components from "./components";

function App() {
	const [author, setAuthor] = useState("");
	const [booksCount, setBooksCount] = useState(0);
	const [books, setBooks] = useState([]);
	const [index, setIndex] = useState(0);
	const [loader, setLoader] = useState(true);
  const input = useRef<HTMLInputElement>(null);

  // Disable loader after 1 second (time for the app to load)
	setInterval(() => {
		setLoader(false);
	}, 1000);

  // Update the list of books when the index change
	useEffect(() => {
		if (author == "") return;
		searchBook();
	}, [index]);

  /**
    * @description Search for a book by author name and start index, then set the books and books count state
    * 
    * @returns {void}
    */
	const searchBook = async () => {
		if (!author) return;
		const response = await axios.get(
			"https://www.googleapis.com/books/v1/volumes",
			{
				params: {
					q: "inauthor:" + author,
					startIndex: index,
				},
			}
		);
		setBooks(response.data.items);
		setBooksCount(response.data.totalItems);
	};

  /**
   * @description Handle the change of the input value and call the search function
   * 
   * @param e the event
   * 
   * @returns {void}
   */
	const handleChange = (e: any) => {
		e.preventDefault();
		setAuthor(e.target.value);
		handleSearch(e);
	};

  /**
   * @description Handle the search button click and call 
   * the search function.
   * 
   * @param e the event
   * 
   * @returns {void}
   */
	const handleSearch = (e: any) => {
		e.preventDefault();
		setIndex(0);
		searchBook();
	};

  /**
   * @description Handle the keydown event of the input and 
   * call the search function if the key is enter.
   * 
   * @param e the event
   * 
   * @returns {void}
   */
	const handleKeyDownEnter = (e: any) => {
		if (e.key == "Enter") handleSearch(e);
	};

  /**
   * @description Reset all the states and the input value.
   * 
   * @param e the event
   * 
   * @returns {void}
   */
	const resetAll = (e: any) => {
		e.preventDefault();
		setAuthor("");
		setBooksCount(0);
		setBooks([]);
		setIndex(0);
		if(input.current)input.current.value = "";
	};

  //#region Render the components
	return (
		<div className="App">

			{loader ? <Components.Loader /> : null}

			<Components.Header
				resetAll={resetAll}
				handleSearch={handleSearch}
				handleChange={handleChange}
				handleKeyDownEnter={handleKeyDownEnter}
        inputRef={input}
			/>

			<Components.BooksList books={books} />

			{booksCount == 0 ? null : (
				<Components.Pagination
					index={index}
					booksCount={booksCount}
					setIndex={setIndex}
				/>
			)}
		</div>
	);
  //#endregion
}

export default App;
