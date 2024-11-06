import React, { useState } from 'react';  
import './Signup.css'; // Adjust this path if needed  

const Signup = () => {  
  const [fullname, setFullname] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [mobilenumber, setMobilenumber] = useState("");  

  const handleSignup = async (e) => {  
    e.preventDefault();  

    const signupData = {
      fullname,
      email,
      password,
      mobilenumber,
    };

    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        // Optionally redirect or show a success message
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        // Optionally show an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };  

  return (  
    <div className="signup-container">  
      <div className="signup-box">  
        <h2 className="signup-header">Sign Up</h2>  
        <form onSubmit={handleSignup}>  
          <div className="input-group">  
            <label htmlFor="fullname">Full Name</label>  
            <input  
              type="text"  
              id="fullname"  
              value={fullname}  
              onChange={(e) => setFullname(e.target.value)}  
              required  
            />  
          </div>  
          <div className="input-group">  
            <label htmlFor="email">Email</label>  
            <input  
              type="email"  
              id="email"  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              required  
            />  
          </div>  
          <div className="input-group">  
            <label htmlFor="mobilenumber">Mobile Number</label>  
            <input  
              type="tel"  
              id="mobilenumber"  
              value={mobilenumber}  
              onChange={(e) => setMobilenumber(e.target.value)}  
              required  
            />  
          </div>  
          <div className="input-group">  
            <label htmlFor="password">Password</label>  
            <input  
              type="password"  
              id="password"  
              value={password}  
              onChange={(e) => setPassword(e.target.value)}  
              required  
            />  
          </div>  
          <div className="signup-actions">  
            <button type="submit" className="signup-btn">  
              Sign Up  
            </button>  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default Signup;
