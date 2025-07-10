import React, { useState } from "react";
import "./CourseRegistration.css";

export default function CourseRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    mode: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFilled = Object.values(formData).every((val) => val.trim() !== "");
    if (!allFilled) {
      setMessage("❌ Please fill in all fields.");
    } else {
      setMessage("✅ Registration submitted successfully!");
    }
  };

  return (
    <div className="course-wrapper">
      <div className="course-box">
        <h2> Course Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
          </div>

          <label>Select Course</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">-- Choose Course --</option>
            <option value="Python">Python</option>
            <option value="Web Development">Web Development</option>
            <option value="Java">Java </option>
            <option value="UI/UX">UI/UX</option>
          </select>

          <label>Course Mode</label>
          <div className="radio-group">
            <label><input type="radio" name="mode" value="Online" onChange={handleChange} /> Online</label>
            <label><input type="radio" name="mode" value="Offline" onChange={handleChange} /> Offline</label>
          </div>

          {message && (
            <p className={`message ${message.includes("success") ? "success" : "error"}`}>
              {message}
            </p>
          )}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
