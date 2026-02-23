import { useState } from "react";

function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // 20 workshops with trainer names
  const workshops = [
    { title: "Full Stack Development Bootcamp", trainer: "Rahul Sharma", date: "March 10, 2026", description: "React, Node.js, MongoDB complete training." },
    { title: "UI/UX Design Masterclass", trainer: "Sneha Reddy", date: "March 15, 2026", description: "Modern UI design with Figma." },
    { title: "Python Programming Basics", trainer: "Arjun Verma", date: "March 20, 2026", description: "Learn Python from scratch." },
    { title: "Machine Learning Fundamentals", trainer: "Priya Mehta", date: "March 25, 2026", description: "Intro to ML algorithms." },
    { title: "Data Science with Python", trainer: "Karthik Rao", date: "April 2, 2026", description: "Pandas, NumPy, data visualization." },
    { title: "React Web Development", trainer: "Anjali Gupta", date: "April 5, 2026", description: "Build dynamic web apps." },
    { title: "Cyber Security Essentials", trainer: "Vikram Singh", date: "April 8, 2026", description: "Protect systems from attacks." },
    { title: "AWS Cloud Computing", trainer: "Rohit Kumar", date: "April 12, 2026", description: "Deploy apps on AWS cloud." },
    { title: "Android App Development", trainer: "Neha Kapoor", date: "April 15, 2026", description: "Build Android apps." },
    { title: "DevOps Fundamentals", trainer: "Suresh Babu", date: "April 18, 2026", description: "CI/CD pipelines and automation." },
    { title: "Artificial Intelligence Basics", trainer: "Pooja Iyer", date: "April 22, 2026", description: "AI concepts and tools." },
    { title: "Blockchain Technology", trainer: "Aditya Joshi", date: "April 25, 2026", description: "Cryptocurrency and blockchain." },
    { title: "Java Programming Mastery", trainer: "Ramesh Patel", date: "April 28, 2026", description: "Core + advanced Java." },
    { title: "C++ Programming Workshop", trainer: "Deepak Yadav", date: "May 2, 2026", description: "OOP and problem solving." },
    { title: "Digital Marketing", trainer: "Meena Nair", date: "May 5, 2026", description: "SEO and social media marketing." },
    { title: "Graphic Design Basics", trainer: "Kiran Das", date: "May 8, 2026", description: "Photoshop and Illustrator." },
    { title: "Software Testing Training", trainer: "Amit Tiwari", date: "May 12, 2026", description: "Manual and automation testing." },
    { title: "Big Data Analytics", trainer: "Harish Chandra", date: "May 15, 2026", description: "Hadoop and Spark intro." },
    { title: "Internet of Things (IoT)", trainer: "Lakshmi Devi", date: "May 18, 2026", description: "Smart devices and sensors." },
    { title: "Game Development with Unity", trainer: "Varun Teja", date: "May 22, 2026", description: "Create 2D & 3D games." }
  ];

  const handleJoin = (workshop) => {
    setSelectedWorkshop(workshop);
    setName("");
    setEmail("");
    setNameError("");
    setEmailError("");
  };

  const handleSubmit = () => {
    let valid = true;

    if (!name.trim()) {
      setNameError("Please enter your name");
      valid = false;
    } else setNameError("");

    if (!email.trim()) {
      setEmailError("Please enter your email");
      valid = false;
    } else setEmailError("");

    if (valid) {
      alert(`Registered successfully for ${selectedWorkshop.title}`);
      setSelectedWorkshop(null);
    }
  };

  return (
    <div className="container">
      <h1>All Workshops</h1>

      <div className="card-container">
        {workshops.map((workshop, index) => (
          <div className="card" key={index}>
            <h3>{workshop.title}</h3>
            <p><strong>Trainer:</strong> {workshop.trainer}</p>
            <p><strong>Date:</strong> {workshop.date}</p>
            <p>{workshop.description}</p>

            <button onClick={() => handleJoin(workshop)}>
              Join Session
            </button>
          </div>
        ))}
      </div>

      {selectedWorkshop && (
        <div className="popup">
          <div className="popup-content">
            <h3>Register for {selectedWorkshop.title}</h3>

            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="error">{nameError}</p>}

            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}

            <button onClick={handleSubmit}>Confirm Registration</button>

            <button
              className="secondary-btn"
              onClick={() => setSelectedWorkshop(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workshops;