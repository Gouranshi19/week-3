import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditNote() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/notes/api/${id}/`, {
        credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => {
            setTitle(data.title);
            setContent(data.content);
        });
    }, [id]);

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending:", title, content);

    fetch(`http://127.0.0.1:8000/notes/api/update/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content
        }),
    })
    .then(res => {
        console.log("Status:", res.status);
        return res.json();
    })
    .then(data => {
        console.log(data);
        navigate("/notes");
    })
    .catch(err => console.log(err));
};

    return (
        <div className="container mt-5">
        <h2>Edit Note</h2>

        <input
            className="form-control mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
            className="form-control mb-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleSubmit}>
            Update Note
        </button>
        </div>
    );
}

export default EditNote;