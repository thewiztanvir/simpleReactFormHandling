import React from 'react';
import './SimpleForm.css'; // Import the updated CSS file

function SimpleForm() {
  // Handle form submit using new FormData
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Create a new FormData object from the event target (form)
    const formData = new FormData(event.target);

    // Convert form data to an object
    const formObject = Object.fromEntries(formData.entries());

    console.log('Form Submitted:', formObject);
  };

  return (
    <form onSubmit={handleSubmit} className="simple-form">
      {/* Name Input */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Input */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          placeholder="Enter your password"
        />
      </div>

      {/* Phone Input */}
      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Gender Selection */}
      <div className="form-group">
        <label className="form-label">Gender:</label>
        <select name="gender" className="form-input">
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}

export default SimpleForm;
