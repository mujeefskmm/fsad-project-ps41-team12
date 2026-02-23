import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>Welcome to Workshop Platform 🚀</h1>

        <p className="hero-text">
          <span className="line line1">
            Upgrade your skills with expert-led training programs.
          </span>
          <span className="line line2">
            Explore industry-ready workshops in development, AI, cloud, and design.
          </span>
        </p>

        <button
          className="explore-btn"
          onClick={() => navigate("/workshops")}
        >
          Explore Workshops
        </button>
      </div>
    </div>
  );
}

export default Home;