import "../../styles/_loader.scss";

/**
 * @description The loader component
 * 
 * @returns {JSX.Element} - The component
 * 
 * @memberof Loader
 * 
 * @example
 * <Loader />
 */
export const Loader = () => {
    return (
        <div className="loader">
            <div className="loader__content">
                <div className="loader__content__spinner"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    );
    };