import Header from "./Component/Header";
import About from "./Contents/About";
import Projects from "./Contents/Project";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={About} />
      <Route path="/Projects" component={Projects} />{" "}
    </BrowserRouter>
  );
}

export default App;
