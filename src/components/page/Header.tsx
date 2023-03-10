import { SyntheticEvent, LegacyRef } from "react";

import { Logo, SearchIcon } from "../../assets/assets";

/**
 * @description Defines the props for the Header component
 * 
 * @interface HeaderProps
 * @memberof Header
 * 
 * @property {function} resetAll - The function to reset the search
 * @property {function} handleSearch - The function to handle the search
 * @property {function} handleChange - The function to handle the input change
 * @property {function} handleKeyDownEnter - The function to handle the keydown event
 * @property {LegacyRef<HTMLInputElement>} inputRef - The reference of the input
 */
interface HeaderProps {
    resetAll: (e: SyntheticEvent) => void;
    handleSearch: (e: SyntheticEvent) => void;
    handleChange: (e: SyntheticEvent) => void;
    handleKeyDownEnter: (e: SyntheticEvent) => void;
    inputRef: LegacyRef<HTMLInputElement> | undefined;
}

/**
 * @description The Header component, that handle the search of the books.
 * 
 * @param {HeaderProps} props - The props of the component
 * 
 * @returns {JSX.Element} - The component
 * 
 * @memberof Header
 * 
 * @example
 * <Header resetAll={resetAll} handleSearch={handleSearch} handleChange={handleChange} handleKeyDownEnter={handleKeyDownEnter} inputRef={inputRef} />
 */
export const Header = ({resetAll, handleSearch, handleChange, handleKeyDownEnter, inputRef}: HeaderProps) => {

    //#region Render the component
    return (
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
                onKeyDown={handleKeyDownEnter}
                ref={inputRef}
                placeholder="Search an author..."
            />
            </div>
        </div>
    );
    //#endregion
    
};