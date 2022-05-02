import { Home } from "./pages/home";
import { VideoList } from "./pages/video-list";
import "./style/style.css";
import { ContextWrapper } from "./wrappers/context-wrapper";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Logout } from "./pages/logout";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextWrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/videos" element={<VideoList />}></Route>
            <Route path="/videos/:type" element={<VideoList />}></Route>
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
