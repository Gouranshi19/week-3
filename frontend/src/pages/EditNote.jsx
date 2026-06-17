import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function EditNote() {
    const navigate = useNavigate();
    const location = useLocation();
    const note = location.state;

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("access");
            await axios.put(
                `http://127.0.0.1:8000/api/notes/${note.id}/`,
                { title, content },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            navigate("/notes");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
            <h2>Edit Note</h2>
            <form onSubmit={handleEdit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
                />
                <br />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: "100%", padding: "8px", height: "150px" }}
                />
                <br /><br />
                <button type="submit" style={{ padding: "8px 16px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                    Save
                </button>
                <button onClick={() => navigate("/notes")} style={{ marginLeft: "10px", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default EditNote;