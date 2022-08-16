import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import CreateProfile from "./pages/profile/CreateProfile"
import EditProfile from "./pages/profile/EditProfile"
import MessageList from "./pages/message/MessageList"
import ReplyMessage from "./pages/message/ReplyMessage"
import StackList from "./pages/stack/StackList"
import CreateStack from "./pages/stack/CreateStack"
import EditStack from "./pages/stack/EditStack"
import ProjectList from "./pages/project/ProjectList"
import CreateProject from "./pages/project/CreateProject"
import EditProject from "./pages/project/EditProject"
import ContactList from "./pages/contact/ContactList"
import CreateContact from "./pages/contact/CreateContact"
import EditContact from "./pages/contact/EditContact"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext"

function App() {

  const { user } = useAuthContext()

  return (
    <div className="app">
      <Router>
        <Routes>

          <Route path="/" exact element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="register" element={!user ? <Register /> : <Navigate to="/" />} />

          <Route path="/profile" exact element={user ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/create-profile" exact element={user ? <CreateProfile /> : <Navigate to="/login" />} />
          <Route path="/edit-profile/:id" exact element={user ? <EditProfile /> : <Navigate to="/login" />} />

          <Route path="/messages" exact element={user ? <MessageList /> : <Navigate to="/login" />} />
          <Route path="/reply-message/:id" exact element={user ? <ReplyMessage /> : <Navigate to="/login" />} />

          <Route path="/stacks" exact element={user ? <StackList /> : <Navigate to="/login" />} />
          <Route path="/create-stack" exact element={user ? <CreateStack /> : <Navigate to="/login" />} />
          <Route path="/edit-stack/:id" exact element={user ? <EditStack /> : <Navigate to="/login" />} />

          <Route path="/projects" exact element={user ? <ProjectList /> : <Navigate to="/login" />} />
          <Route path="/create-project" exact element={user ? <CreateProject /> : <Navigate to="/login" />} />
          <Route path="/edit-project/:id" exact element={user ? <EditProject /> : <Navigate to="/login" />} />

          <Route path="/contacts" exact element={user ? <ContactList /> : <Navigate to="/login" />} />
          <Route path="/create-contact" exact element={user ? <CreateContact /> : <Navigate to="/login" />} />
          <Route path="/edit-contact/:id" exact element={user ? <EditContact /> : <Navigate to="/login" />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
