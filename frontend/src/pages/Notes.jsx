import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Notes() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const token = localStorage.getItem("access");
            const response = await axios.get(
                "http://127.0.0.1:8000/api/notes/",
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNotes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

const handleDelete = async (id) => {
    try {
        const token = localStorage.getItem("access");
        await axios.delete(
            `http://127.0.0.1:8000/api/notes/${id}/`,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchNotes();
    } catch (error) {
        console.log(error);
    }
};

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/login");
    };

    return (
        <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h1 style={{ margin: 0 }}>My Notes</h1>
                
            </div>
            <hr />
            {notes.length === 0 ? (
                <p>No notes found.</p>
            ) : (
                notes.map((note) => (
                    <div key={note.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginBottom: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
    <h3 style={{ margin: "0 0 8px 0" }}>{note.title}</h3>
    <p style={{ margin: 0, color: "#555" }}>{note.content}</p>
        <div style={{ marginTop: "10px" }}>
            <button onClick={() => handleDelete(note.id)} style={{ padding: "6px 12px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Delete
            </button>
            <button onClick={() => navigate("/edit-note", { state: note })} style={{ padding: "6px 12px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "8px" }}>
    Edit
</button>
        </div>
    </div>

                ))
                
            )}
            <div>
                    <button onClick={() => navigate("/add-note")} style={{ padding: "8px 16px", marginRight: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                        + Add Note
                    </button>
                    <button onClick={handleLogout} style={{ padding: "8px 16px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                        Logout
                    </button>
                </div>
        </div>
    );
}

export default Notes;