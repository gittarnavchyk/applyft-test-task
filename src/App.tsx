import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import UserDetails from "./pages/Users/UserDetails/UserDetails";
import Users from "./pages/Users/Users";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main role="main" aria-label="Main content">
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ToastContainer role="alert" aria-live="polite" />
    </BrowserRouter>
  );
}

export default App;
