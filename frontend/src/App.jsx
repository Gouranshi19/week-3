import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Register from "./pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        } />
        <Route path="/add-note" element={
          <ProtectedRoute>
              <AddNote />
          </ProtectedRoute>
      } />
      <Route path="/edit-note" element={
          <ProtectedRoute>
              <EditNote />
          </ProtectedRoute>
      } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;