import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/add" element={<AddNote />} />
        <Route path="/notes/edit/:id" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;