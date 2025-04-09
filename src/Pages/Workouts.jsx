// src/pages/Workouts.jsx
import  { useState } from 'react';

import React from 'react';
import './Workouts.css';


const initialWorkouts = [
  {
    id: 1,
    name: 'Full Body Burn',
    duration: '45 min',
    difficulty: 'Intermediate',
    image: 'https://sunnyhealthfitness.com/cdn/shop/articles/amateur-athlete-upper-body-workout-01_750x.jpg?v=1716316833',
  },
  {
    id: 2,
    name: 'HIIT Blast',
    duration: '30 min',
    difficulty: 'Advanced',
    image: 'https://t3.ftcdn.net/jpg/02/79/77/52/360_F_279775278_bjnXqrywRgLoTBrVdtVDo8fQuteDlG5C.jpg',
  },
  {
    id: 3,
    name: 'Yoga Flex',
    duration: '60 min',
    difficulty: 'Beginner',
    image: 'https://vikasa.com/wp-content/uploads/2024/08/RAW09580-1024x631.jpg',
  },
  {
    id: 4,
    name: 'Core Crusher',
    duration: '20 min',
    difficulty: 'Intermediate',
    image: 'https://cdn.mos.cms.futurecdn.net/MGFfSgcSYT7Qwow2eKzqiL-1280-80.jpg',
  },
];

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkouts = initialWorkouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="workouts-page">
      <h2>Workout Library</h2>

      <input
        type="text"
        placeholder="Search workouts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="workout-grid">
        {filteredWorkouts.map((workout) => (
          <div className="workout-card" key={workout.id}>
            <img src={workout.image} alt={workout.name} />
            <div className="workout-info">
              <h3>{workout.name}</h3>
              <p>{workout.duration}</p>
              <span className="tag">{workout.difficulty}</span>
              <button className="start-btn">Start Workout</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
