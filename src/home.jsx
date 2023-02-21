import React, { useState } from "react";

export const Home = (props) => {
    const [location, setlocation] = useState('');
    const [arrivaltime, setarrivaltime] = useState('');
    const [departuretime, setdeparturetime] = useState('');


    return (
        <div className="auth-form-container">
            <form className="login-form">
                <label htmlFor="location">Location</label>
                <input value={location} onChange={(e) => setlocation(e.target.value)}type="text" placeholder="Enter the location" id="location" name="location" />
                <label htmlFor="arrivaltime">Arrival time</label>
                <input value={arrivaltime} onChange={(e) => setarrivaltime(e.target.value)} type="text" placeholder="Enter the arrival time" id="arrivaltime" name="arrivaltime" />
                <label htmlFor="departuretime">Departure time</label>
                <input value={departuretime} onChange={(e) => setdeparturetime(e.target.value)} type="text" placeholder="Enter the departure time" id="departuretime" name="departuretime" />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}