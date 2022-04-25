export const AddPlaylist = () => {
    return (
        <div className="pop-up-container flex flex-center show">
            <div className="bg-charcoal-gray pop-up">
                <h2 className="ml-md text-center secondary">New Playlist</h2>
                <form className="flex-col">
                    <div className="form-field">
                        <label className="input-label charcoal-black">Name</label>
                        <div className="form-control">
                            <input type="text" className="input" placeholder="label"/>
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="input-label flex">
                            <input type="checkbox"  className="input-radio mr-md" name="Label" value="Label" />
                            <span>Private</span>
                        </label>
                    </div>
                    <div className="form-field">
                        <label className="input-label flex">
                            <input type="checkbox"  className="input-radio mr-md" name="Label" value="Label" />
                            <span>Public</span>
                        </label>
                    </div>
                    <div className="flex btn-group m-lg">
                        <button className="btn bg-secondary white">Save</button>
                        <button className="btn bg-charcoal-gray white">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}