import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';

const data = {
  "name": "Health Research laboratories, Bangalore",
  "title": "BlockChain For Health Technology",
  "description": "Research Objectives\nTo identify the key benefits of blockchain technology in healthcare...",
  "target": "1000",
  "deadline": "2024-11-12",
  "image": "https://tse2.mm.bing.net/th?id=OIP.z6nBc5D25Gdz0Cre0lpSIgHaD3&pid=Api&P=0&h=220"
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { address, contract, getCampaigns } = useStateContext();

  useEffect(() => {
    if (contract && showDetails) {
      setIsLoading(true);
      getCampaigns().then((data) => {
        setIsLoading(false);
      });
    }
  }, [address, contract, getCampaigns, showDetails]);

  const handleRefresh = () => {
    setShowDetails(true);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', fontFamily: 'Arial, sans-serif', position: 'relative', minHeight: '100vh' }}>
      {showDetails && (
        <div style={{ backgroundColor: '#f2f2f2', padding: '20px', margin: '20px 0', borderRadius: '5px' }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2 style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>{data.name}</h2>
              <h3 style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>{data.title}</h3>
              <p style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>{data.description}</p>
              <p style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>Target: {data.target}</p>
              <p style={{ fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>Deadline: {data.deadline}</p>
              <img src={data.image} alt={data.title} style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      )}
      <h2 style={{ fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>All Campaigns</h2>
      <button onClick={handleRefresh} style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Refresh</button>
    </div>
  );
};

export default Home;
