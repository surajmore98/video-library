import { Home } from "./pages/Home";
import "./style/style.css";
import { ContextWrapper } from "./wrappers/context-wrapper";

const App = () => {
  return (
    <div className="App">
      <ContextWrapper>
          <Home/>
      </ContextWrapper>
    </div>
  );
}

export default App;
