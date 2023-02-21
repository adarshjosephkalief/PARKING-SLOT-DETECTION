
import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [vehicleModel, setVehicleModel] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
      };
    
    const handleVehicleModelChange = (event) => {
        setVehicleModel(event.target.value);
      };
    
    const handleVehicleNumberChange = (event) => {
        setVehicleNumber(event.target.value);
      };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className='register-section'>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your Full Name" />
                
                    
                    
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" value={mobileNumber} placeholder="Enter your Mobile Number" onChange={handleMobileNumberChange}/>
                    
                
                    
                <label htmlFor="vehicleModel">Vehicle Model:</label>
                <input type="text" id="vehicleModel" name="vehicleModel" placeholder="Enter your Vehicle Model" value={vehicleModel} onChange={handleVehicleModelChange}/>
            </div>

            <div className='register-section'>                    
                <label htmlFor="vehicleNumber">Vehicle Number:</label>
                <input type="text" id="vehicleNumber" name="vehicleNumber" placeholder="Enter your Vehicle Number" value={vehicleNumber} onChange={handleVehicleNumberChange}/>
                    
                    
                    
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter E-mail address" id="email" name="email" />
                
                    
                    
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter password" id="password" name="password" />   
            </div>
                
            
        </form>
            <button type="submit">Register</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}