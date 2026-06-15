import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Notes() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/notes/api/")
        .then(res => res.json())
        .then(data => setNotes(data));
    }, []);
    
const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/notes/api/delete/${id}/`)
        .then(res => res.json())
        .then(() => {
            setNotes(notes.filter(note => note.id !== id));
        });
};
    return (
        <div className="container mt-5">
        <h1>My Notes</h1>

        <table className="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Content</th>
            </tr>
            </thead>

            <tbody>
            {notes.map(note => (
                <tr key={note.id}>
                    <td>{note.id}</td>
                    <td>{note.title}</td>
                    <td>{note.content}</td>

                    <td>
                        <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => {
                                console.log(note.id);
                                navigate(`/notes/edit/${note.id}`);}}
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(note.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
                    </table>
        </div>
    );
}

export default Notes;