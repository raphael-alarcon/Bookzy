import axios from "axios";
import { useState, useEffect } from "react";
import * as Components from "./components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Logo from "./assets/logo.png";
import SearchIcon from "./assets/search.svg";

function App() {
  const [author, setAuthor] = useState("");
  const [booksCount, setBooksCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (author == "") return;
    searchBook();
  }, [index]);

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

  const handleChange = (e: any) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    setIndex(0);
    searchBook();
  };

  const handleChangeEnter = (e: any) => {
    if (e.key == "Enter") handleSearch(e);
  };

  const handleIndex = (i: number) => (e: any) => {
    e.preventDefault();
    if (index + i < 0 || index + 10 + i > booksCount) return;
    setIndex(index + i);
  };

  const resetAll = (e: any) => {
    e.preventDefault();
    setAuthor("");
    setBooksCount(0);
    setBooks([]);
    setIndex(0);
    const input = document.getElementById("search__input") as HTMLInputElement;
    input.value = "";
  };

  return (
    <div className="App">
      <div className="header">
        <a className="logo" onClick={resetAll}>
          <img src={Logo} alt="Logo" />
          <h1>Bookzy</h1>
        </a>
        <div className="search__section">
          <button className="search__button" onClick={handleSearch}>
            <img src={SearchIcon} />
          </button>
          <input
            id="search__input"
            type="text"
            onChange={handleChange}
            onKeyDown={handleChangeEnter}
            placeholder="Search an author..."
          />
        </div>
      </div>
      <Components.BooksList books={books} />

      {booksCount == 0 ? null : (
        <div>
          <p className="label__index">
            {index + 1} - {index + 10} of {booksCount}
          </p>
          <div className="pagination">
            <a onClick={handleIndex(-10)}>
              <AiOutlineArrowLeft />
            </a>
            <a onClick={handleIndex(10)}>
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
