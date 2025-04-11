import React, { useState } from 'react';
import './Schedule.css';

const defaultSchedule = {
  Monday: '',
  Tuesday: '',
  Wednesday: '',
  Thursday: '',
  Friday: '',
  Saturday: '',
  Sunday: '',
};

const workoutOptions = [
  'Chest',
  'Back',
  'Core',
  'Arms',
  'Legs',
  'Glutes',
  'Rest Day',
];

export default function Schedule() {
  const [schedule, setSchedule] = useState(defaultSchedule);
  const [savedSchedule, setSavedSchedule] = useState(null);
  const [editMode, setEditMode] = useState(true);

  const handleChange = (day, value) => {
    setSchedule(prev => ({ ...prev, [day]: value }));
  };

  const handleSave = () => {
    setSavedSchedule(schedule);
    setEditMode(false);
  };

  const handleEdit = () => {
    setSchedule(savedSchedule || defaultSchedule);
    setEditMode(true);
  };

  return (
    <div className="schedule-container">
      <h1>Create Your Weekly Workout Schedule</h1>

      {editMode ? (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Workout</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map(day => (
              <tr key={day}>
                <td>{day}</td>
                <td>
                  <input
                    list="workouts"
                    type="text"
                    placeholder={`Choose or type workout for ${day}`}
                    value={schedule[day]}
                    onChange={(e) => handleChange(day, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="saved-schedule">
          <h2>Your Saved Schedule</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Workout</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(savedSchedule).map(([day, workout]) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td>{workout || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleEdit} className="save-btn">Change Schedule</button>
        </div>
      )}

      {editMode && <button onClick={handleSave} className="save-btn">Save Schedule</button>}

      <datalist id="workouts">
        {workoutOptions.map(option => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </div>
  );
}