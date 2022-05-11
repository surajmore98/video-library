import "./style/style.css";
import { ContextWrapper } from "./wrappers/context-wrapper";
import { RequireAuth } from "./wrappers/require-auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WatchLater, Login, Register, Logout, PlayList, PlayListDetails,
  LikedVideoList, History, Home, VideoList }
  from "./pages/pages";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextWrapper>
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/videos" element={<VideoList />}></Route>
            <Route path="/videos/:type" element={<VideoList />}></Route>
            <Route path="/playlists" element={<RequireAuth> <PlayList /> </RequireAuth>}></Route>
            <Route path="/playlist/:id" element={<RequireAuth> <PlayListDetails /> </RequireAuth>}></Route>

            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            {/* private routes */}
            <Route path="/watchlater" element={<RequireAuth> <WatchLater /> </RequireAuth>}></Route>
            <Route path="/likes" element={<RequireAuth> <LikedVideoList /> </RequireAuth>}></Route>
            <Route path="/playlists" element={<RequireAuth> <PlayList /> </RequireAuth>}></Route>
            <Route path="/playlist/:id" element={<RequireAuth> <PlayListDetails /> </RequireAuth>}></Route>
            <Route path="/history" element={<RequireAuth> <History /> </RequireAuth>}></Route>
          </Routes>
        </ContextWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
