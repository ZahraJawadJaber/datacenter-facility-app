//src/pages/AreasPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AreasPage.css';

const AreasPage = ({ selectedSite, setSelectedArea }) => {
  const navigate = useNavigate();

  // Sample areas data - replace with your actual data or API calls
  const areas = [
    { id: 1, name: 'Power Distribution', icon: '⚡', equipmentCount: 12 },
    { id: 2, name: 'Cooling Systems', icon: '❄️', equipmentCount: 8 },
    { id: 3, name: 'Network Equipment', icon: '🌐', equipmentCount: 15 },
    { id: 4, name: 'Server Racks', icon: '🖥️', equipmentCount: 25 },
    { id: 5, name: 'Fire Suppression', icon: '🔥', equipmentCount: 6 },
    { id: 6, name: 'Security Systems', icon: '🔒', equipmentCount: 10 },
    { id: 7, name: 'UPS Systems', icon: '🔋', equipmentCount: 5 },
    { id: 8, name: 'Cable Management', icon: '🔌', equipmentCount: 20 }
  ];

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    navigate('/checklist');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="areas-page">
      <div className="areas-header">
        <button onClick={handleBack} className="btn-back">← Back</button>
        <div className="site-info">
          <h1>Areas in {selectedSite.site}</h1>
          <p>{selectedSite.cluster} - {selectedSite.region}</p>
        </div>
      </div>

      <div className="areas-grid">
        {areas.map(area => (
          <div 
            key={area.id} 
            className="area-card"
            onClick={() => handleAreaClick(area)}
          >
            <div className="area-icon">{area.icon}</div>
            <h3>{area.name}</h3>
            <p className="equipment-count">{area.equipmentCount} items to check</p>
            <button className="btn-secondary">Start Audit →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasPage;