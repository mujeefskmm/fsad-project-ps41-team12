import { useState } from "react";

function AdminDashboard() {
  const [showCreate, setShowCreate] = useState(false);
  const [showView, setShowView] = useState(false);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <div className="admin-container">

        {/* CREATE WORKSHOP CARD */}
        <div className="admin-card">
          <h3>Create New Workshop</h3>
          <button onClick={() => setShowCreate(true)}>
            Create Workshop
          </button>
        </div>

        {/* VIEW REGISTRATIONS CARD */}
        <div className="admin-card">
          <h3>Manage Registrations</h3>
          <button onClick={() => setShowView(true)}>
            View Registrations
          </button>
        </div>

      </div>

      {/* ================= CREATE WORKSHOP POPUP ================= */}
      {showCreate && (
        <div className="popup">
          <div className="popup-content">
            <h3>Create Workshop</h3>

            <input type="text" placeholder="Workshop Title" />
            <input type="text" placeholder="Trainer Name" />
            <input type="date" />
            <input type="text" placeholder="Description" />

            <button onClick={() => alert("Workshop Created Successfully!")}>
              Submit
            </button>

            <button
              className="secondary-btn"
              onClick={() => setShowCreate(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ================= VIEW REGISTRATIONS POPUP ================= */}
      {showView && (
        <div className="popup">
          <div className="popup-content">
            <h3>Registered Users</h3>

            <p>👤 Rahul — Full Stack Development</p>
            <p>👤 Priya — UI/UX Design</p>
            <p>👤 Arjun — AI Workshop</p>

            <button
              className="secondary-btn"
              onClick={() => setShowView(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminDashboard;