
//src/pages/SelectionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectionPage.css';

const SelectionPage = ({ setSelectedSite }) => {
  const navigate = useNavigate();
  const [region, setRegion] = useState('');
  const [cluster, setCluster] = useState('');
  const [site, setSite] = useState('');

  // Sample data - replace with your actual data or API calls
  const regions = ['EMEA', 'APAC', 'NA', 'SA'];
  
  const clusters = {
    'EMEA': ['BAH', 'DXB', 'CPT'],
    'APAC': ['SIN', 'SYD', 'TOK'],
    'NA': ['IAD', 'PDX', 'DFW'],
    'SA': ['GRU', 'SCL', 'BOG']
  };

  const sites = {
    'BAH': ['BAH50', 'BAH51', 'BAH52'],
    'DXB': ['DXB50', 'DXB51', 'DXB52'],
    'CPT': ['CPT50', 'CPT51'],
    'SIN': ['SIN50', 'SIN51', 'SIN52'],
    'SYD': ['SYD50', 'SYD51'],
    'TOK': ['TOK50', 'TOK51', 'TOK52'],
    'IAD': ['IAD50', 'IAD51', 'IAD52'],
    'PDX': ['PDX50', 'PDX51'],
    'DFW': ['DFW50', 'DFW51', 'DFW52'],
    'GRU': ['GRU50', 'GRU51'],
    'SCL': ['SCL50', 'SCL51'],
    'BOG': ['BOG50', 'BOG51']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (region && cluster && site) {
      setSelectedSite({ region, cluster, site });
      navigate('/areas');
    }
  };

  return (
    <div className="selection-page">
      <div className="selection-container">
        <h1>DCEO Facility Walkthrough</h1>
        <p className="subtitle">Welcome to your facility inspection buddy, please select your location:</p>
        
        <form onSubmit={handleSubmit} className="selection-form">
          <div className="form-group">
            <label htmlFor="region">Region</label>
            <select
              id="region"
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setCluster('');
                setSite('');
              }}
              required
            >
              <option value="">Select Region</option>
              {regions.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cluster">Cluster</label>
            <select
              id="cluster"
              value={cluster}
              onChange={(e) => {
                setCluster(e.target.value);
                setSite('');
              }}
              disabled={!region}
              required
            >
              <option value="">Select Cluster</option>
              {region && clusters[region]?.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="site">Site</label>
            <select
              id="site"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              disabled={!cluster}
              required
            >
              <option value="">Select Site</option>
              {cluster && sites[cluster]?.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-primary" disabled={!region || !cluster || !site}>
            Continue to Areas
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectionPage;