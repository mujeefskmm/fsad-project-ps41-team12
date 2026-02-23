import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="hero-card">

        <div className="tag">✈ Elevate Your Career Path</div>

        <h1>
          Welcome to <span>Workshop</span> Platform
        </h1>

        <p className="hero-desc">
          Join a community of forward-thinkers. Access world-class mentorship,
          hands-on skill development, and professional networking sessions
          designed to propel your career into the future.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/workshops")}
          >
            Explore Workshops →
          </button>

          <button className="secondary-btn">
            View Success Stories
          </button>
        </div>

        <div className="stats">
          <div>
            <h3>15k+</h3>
            <p>Active Learners</p>
          </div>
          <div>
            <h3>200+</h3>
            <p>Expert Trainers</p>
          </div>
          <div>
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
        </div>

      </div>

      <div className="features">
        <div className="feature-box">
          <h4>Live Interaction</h4>
          <p>Real-time Q&A with industry leaders.</p>
        </div>

        <div className="feature-box">
          <h4>Certified Skills</h4>
          <p>Earn certificates recognized globally.</p>
        </div>

        <div className="feature-box">
          <h4>Project Based</h4>
          <p>Build a portfolio while you learn.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;