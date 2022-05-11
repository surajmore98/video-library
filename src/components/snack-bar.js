import { useData } from "../contexts/data-context";

export const SnackBar = ({buttonText, action}) => {
    const { error, setError } = useData();
    const closeClickHandler = () => setError("");

    return (
        <div className="component-content-section fixed">
            <div className="snack-bar-wrapper">
                <div className="snack-bar fixed-bottom show">
                    <div className="snack-bar-content font-bold font-lg">
                    {error}
                    </div>
                    <div className="snack-bar-action">
                        { buttonText && <button onClick={action}
                            className="btn primary bg-warning font-bold font-lg">
                            {buttonText}
                        </button> }
                        <button className="btn btn-round bg-warning primary"
                            onClick={closeClickHandler}>
                            <i className="material-icons">
                                close
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}