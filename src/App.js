import { PosterPage } from "./components/detailPage";
import { MainLaoyut } from "./components/mainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/final-React-Project">
      <Routes>
        <Route exact path="/" Component={MainLaoyut} />
        <Route path="/poster" Component={PosterPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
