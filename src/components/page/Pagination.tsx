import React, { useContext } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

/**
 * @description Define the props of the Pagination component
 *
 * @interface PaginationProps
 * @memberof Pagination
 * 
 * @property {number} index - The index of the first book to display
 * @property {number} booksCount - The total number of books
 * @property {function} setIndex - The function to set the index passed from the parent component
 */
interface PaginationProps {
    index: number;
    booksCount: number;
    setIndex: (index: number) => void;
}

/**
 * @description The Pagination component, that handle the pagination of the books.
 * 
 * @param {PaginationProps} props - The props of the component
 * 
 * @returns {JSX.Element} - The component
 * 
 * @memberof Pagination
 * 
 * @example
 * <Pagination index={index} booksCount={booksCount} setIndex={setIndex} />
 */
export const Pagination = ({index, booksCount, setIndex}: PaginationProps) => {

    /**
     * @description Handle the index change if valid index provided.
     * 
     * @param i the index to add to the current index
     * @param e the event
     * 
     * @returns {void}
     */
    const handleIndex = (i: number) => (e: any) => {
        e.preventDefault();
        if (index + i < 0 || index + 10 + i > booksCount) return;
        setIndex(index + i);
    };
    
    //#region Render the component
    return (
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
    );
    //#endregion
};