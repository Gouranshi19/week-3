import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("access");
            await axios.post(
                "http://127.0.0.1:8000/api/notes/",
                { title, content },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            navigate("/notes");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h2>Add Note</h2>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
                />
                <br />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: "100%", padding: "8px", height: "150px" }}
                />
                <br /><br />
                <button type="submit">Save Note</button>
                <button onClick={() => navigate("/notes")} style={{ marginLeft: "10px" }}>Cancel</button>
            </form>
        </div>
    );
}

export default AddNote;