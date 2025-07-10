import React, { useState } from "react";
import "./CreatePassword.css";

export default function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setMessage("⚠️ Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
    } else {
      setMessage("✅ Password updated successfully!");
    }
  };

  return (
    <div className="password-wrapper">
      <div className="password-box">
        <h2> Create New Password</h2>
        <form onSubmit={handleSubmit}>
          <label>New Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Re-enter password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {message && (
            <p
              className={`message ${
                message.includes("successfully") ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
