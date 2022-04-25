import { Navbar } from "../components/nav-bar";

export const PlayList = () => {
    return (
        <div>
            <Navbar/>
            <div className="container playlist-container">
                <header className="flex-col flex-center">
                    <h1 className="charcoal-black">Create Your Playlist</h1>
                    <button className="btn btn-md bg-info charcoal-white">Create Playlist</button>
                </header>
                <div className="grid grid-col-sm m-xl">
                    <div className="card flex-center">
                        <h3>Playlist1</h3> 
                    </div>
                    <div className="card flex-center info">
                        <h3>Playlist1</h3> 
                    </div>
                    <div className="card flex-center info">
                        <h3>Playlist1</h3> 
                    </div>
                    <div className="card flex-center info">
                        <h3>Playlist1</h3> 
                    </div>
                    <div className="card flex-center info">
                        <h3>Playlist1</h3> 
                    </div>
                    <div className="card flex-center info">
                        <h3>Playlist1</h3> 
                    </div>
                </div>
            </div>
        </div>
    );
}