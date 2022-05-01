import { useData } from "../contexts/data-context";

export const SnackBar = () => {
    const { error, setError } = useData();
    const closeClickHandler = () => setError("");

    return (
        <div className="component-content-section fixed bg-charcoal-white">
            <div className="snack-bar-wrapper">
                <div className="snack-bar fixed-bottom show">
                    <div className="snack-bar-content">
                    {error}
                    </div>
                    <div className="snack-bar-action">
                        <button className="btn btn-round white bg-charcoal-black"
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