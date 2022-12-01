import "./components/categories/categories.styles.scss";
import Home from "./routes/home/Home.components";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";

const Shopping = () => {
  return (
    <div>
      <h3>This is the Shopping Page</h3>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shopping />}></Route>
      </Route>
    </Routes>
  );
};

/* 
  => Here the Navigation route can be called as the parent route because whenever the page loads, this    page will be consistent througout.
  => The Home and the Shopping page are the sibling routes of each other.
  => The Home route has an index property which means that whenever the path of Navigation route is null i.e '/', this will indicate that the Home page will show irrespective of the path.

*/

export default App;
