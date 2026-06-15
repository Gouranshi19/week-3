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
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setNotes(response.data);
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
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>My Notes</h1>
                
            </div>
            <hr />
            {notes.length === 0 ? (
                <p>No notes found.</p>
            ) : (
                notes.map((note) => (
                    <div key={note.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", marginBottom: "12px" }}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                    </div>
                ))
            )}
            <button onClick={handleLogout} style={{ padding: "8px 16px", cursor: "pointer" }}>
                    Logout
                </button>
        </div>
    );
}

export default Notes;