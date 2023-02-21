import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const floors = [
  { id: 1, name: 'Floor 1' },
  { id: 2, name: 'Floor 2' },
  { id: 3, name: 'Floor 3' },
  { id: 4, name: 'Floor 4' },
  { id: 5, name: 'Floor 5' },
];

const initialSlots = floors.map(floor => ({ floorId: floor.id, slots: Math.floor(Math.random() * 10) }));

function App() {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [slots, setSlots] = useState(initialSlots);

  const handleFloorChange = (event) => {
    setSelectedFloor(parseInt(event.target.value));
  };

  const handleBookClick = () => {
    const newSlots = slots.map(slot => {
      if (slot.floorId === selectedFloor) {
        return { ...slot, slots: Math.max(slot.slots - 1, 0) };
      }
      return slot;
    });
    setSlots(newSlots);
  };

  return (
    <div className='auth-form-container'>
      <h2>Vacant Slots</h2>
      {slots.map(slot => (
        <div key={slot.floorId}>
          <label>
            <input
              type="radio"
              name="floor"
              value={slot.floorId}
              checked={selectedFloor === slot.floorId}
              onChange={handleFloorChange}
            />
            {floors.find(floor => floor.id === slot.floorId).name}
          </label>
          <p>Vacant slots: {slot.slots}</p>
        </div>
      ))}
      <button onClick={handleBookClick}>Book</button>
    </div>
  );
}

export default App;
