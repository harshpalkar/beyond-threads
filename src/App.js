import "./components/categories/categories.styles.scss";
import Home from "./routes/home/Home.components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
