import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New  inputs = { userInputs }  title="Add new user"/>} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs = { productInputs } title="Add new product" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
