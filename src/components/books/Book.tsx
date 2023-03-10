import React from "react";

/**
 * @description Defines the props for the Book component
 * 
 * @interface BookProps
 * @memberof Book
 * 
 * @property {string} image - The image of the book
 * @property {string} name - The name of the book
 * @property {string} synopsis - The synopsis of the book
 * @property {string} previewLink - The link to preview the book
 */
interface BookProps {
  image: string;
  name: string;
  synopsis: string;
  previewLink: string;
}

/**
 * @description The Book component, that display a book.
 * 
 * @param {BookProps} props - The props of the component
 * 
 * @returns {JSX.Element} - The component
 * 
 * @memberof Book
 * 
 * @example
 * <Book image={image} name={name} synopsis={synopsis} previewLink={previewLink} />
 */
export var Book = ({image, name, synopsis, previewLink}: BookProps) => {

  //#region Render the component
  return (
    <a className="book__content" href={previewLink}>
      <img src={image} />
      <div>
        <h2>{name}</h2>
        <p>{synopsis}</p>
      </div>
    </a>
  );
  //#endregion

};
