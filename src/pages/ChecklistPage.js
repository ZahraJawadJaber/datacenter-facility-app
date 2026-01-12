//src/pages/ChecklistPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChecklistPage.css';

const ChecklistPage = ({ selectedArea, selectedSite }) => {
  const navigate = useNavigate();

  // Sample checklist data - replace with your actual data or API calls
  const initialChecklist = [
    { id: 1, equipment: 'Main Power Panel A', task: 'Check voltage levels', completed: false },
    { id: 2, equipment: 'Main Power Panel A', task: 'Inspect for physical damage', completed: false },
    { id: 3, equipment: 'Main Power Panel A', task: 'Verify alarm systems', completed: false },
    { id: 4, equipment: 'Backup Generator', task: 'Check fuel levels', completed: false },
    { id: 5, equipment: 'Backup Generator', task: 'Test auto-start function', completed: false },
    { id: 6, equipment: 'Transfer Switch', task: 'Inspect connections', completed: false },
    { id: 7, equipment: 'Transfer Switch', task: 'Test switching mechanism', completed: false },
    { id: 8, equipment: 'Circuit Breakers', task: 'Check for tripped breakers', completed: false },
    { id: 9, equipment: 'Circuit Breakers', task: 'Verify labeling', completed: false },
    { id: 10, equipment: 'Emergency Lighting', task: 'Test functionality', completed: false }
  ];

  const [checklist, setChecklist] = useState(initialChecklist);
  const [notes, setNotes] = useState('');

  const handleToggle = (id) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleBack = () => {
    navigate('/areas');
  };

  const handleSubmit = () => {
    const completedCount = checklist.filter(item => item.completed).length;
    const totalCount = checklist.length;
    
    alert(`Audit submitted!
Completed: ${completedCount}/${totalCount} tasks
Notes: ${notes || 'None'}`);
    navigate('/areas');
  };

  const completedCount = checklist.filter(item => item.completed).length;
  const totalCount = checklist.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="checklist-page">
      <div className="checklist-header">
        <button onClick={handleBack} className="btn-back">← Back to Areas</button>
        <div className="checklist-info">
          <h1>{selectedArea.name}</h1>
          <p>{selectedSite.site} - {selectedSite.cluster} - {selectedSite.region}</p>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="progress-text">{completedCount} of {totalCount} tasks completed</p>
      </div>

      <div className="checklist-container">
        <div className="checklist-items">
          {checklist.map(item => (
            <div key={item.id} className={`checklist-item ${item.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                id={`item-${item.id}`}
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
              />
              <label htmlFor={`item-${item.id}`}>
                <div className="item-content">
                  <span className="equipment-name">{item.equipment}</span>
                  <span className="task-description">{item.task}</span>
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="notes-section">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any observations or issues found during the audit..."
            rows="5"
          ></textarea>
        </div>

        <div className="action-buttons">
          <button onClick={handleBack} className="btn-secondary">Save Draft</button>
          <button onClick={handleSubmit} className="btn-primary">Submit Audit</button>
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;