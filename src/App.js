import { Home } from "./pages/home";
import { VideoList } from "./pages/video-list";
import "./style/style.css";
import { ContextWrapper } from "./wrappers/context-wrapper";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { RequireAuth } from "./wrappers/require-auth";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Logout } from "./pages/logout";
import { PlayList } from "./pages/playlist";
import { PlayListDetails } from "./pages/play-list-detail";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextWrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/videos" element={<VideoList />}></Route>
            <Route path="/videos/:type" element={<VideoList />}></Route>
            <Route path="/playlists" element={<RequireAuth> <PlayList /> </RequireAuth>}></Route>
            <Route path="/playlist/:id" element={<RequireAuth> <PlayListDetails /> </RequireAuth>}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
        </ContextWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
