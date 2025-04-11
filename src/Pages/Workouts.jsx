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
    link:'https://www.youtube.com/watch?v=UBMk30rjy0o'
  },
  {
    id: 2,
    name: 'HIIT Blast',
    duration: '30 min',
    difficulty: 'Advanced',
    image: 'https://t3.ftcdn.net/jpg/02/79/77/52/360_F_279775278_bjnXqrywRgLoTBrVdtVDo8fQuteDlG5C.jpg',
    link:'https://www.youtube.com/watch?v=ml6cT4AZdqI'
  },
  {
    id: 3,
    name: 'Yoga Flex',
    duration: '60 min',
    difficulty: 'Beginner',
    image: 'https://vikasa.com/wp-content/uploads/2024/08/RAW09580-1024x631.jpg',
    link:'https://www.youtube.com/watch?v=v7AYKMP6rOE'
  },
  {
    id: 4,
    name: 'Core Crusher',
    duration: '20 min',
    difficulty: 'Intermediate',
    image: 'https://cdn.mos.cms.futurecdn.net/MGFfSgcSYT7Qwow2eKzqiL-1280-80.jpg',
    link:'https://www.youtube.com/watch?v=AnYl6Nk9GOA'
  },
  {
    id:5,
    name: 'Calisthenics Basics',
    duration: '30 min',
    difficulty: 'Beginner',
    image: 'https://www.pullup-dip.com/cdn/shop/articles/calisthenics-home-push-ups.jpg?v=1689849396',
    link:'https://www.youtube.com/watch?v=1gUbdNbu6ak'
  },
  {
    id:6,
    name: 'Zumba Party',
    duration: '50 min',
    difficulty: 'Beginner',
    image: 'https://classpass.com/blog/wp-content/uploads/2023/03/Zumba-Workout-ClassPass-scaled.jpeg',
    link: 'https://www.youtube.com/watch?v=fLzjKvvH6x4'
  },
  {
    id:7,
    name: 'Dance Fitness Fun',
    duration: '40 min',
    difficulty: 'All Levels',
    image: 'https://awomanshealth.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MjAwODA4MDk1MjI2NTM3MzQ2/active-people-taking-part-zumba-class-together-copy.png',
    link:'https://www.youtube.com/watch?v=ZWk19OVon2k'
  },
];

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkouts = initialWorkouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="workouts-page">
      

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
              <a href={workout.link} target="_blank" rel="noopener noreferrer">
              <button className="start-btn">Start Workout</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
