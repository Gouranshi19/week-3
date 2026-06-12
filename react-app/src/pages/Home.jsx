import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
    <div className="container text-center mt-5">
        <h1>Welcome to Notes App</h1>

        <button
            className="btn btn-primary me-2"
            onClick={() => navigate("/notes")}
        >
            My Notes
        </button>

        <button
            className="btn btn-success"
            onClick={() => navigate("/notes/add")}
        >
            Add Note
        </button>
    </div>
    );
}

export default Home;