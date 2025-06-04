import { useState } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch cat fact.');
      console.error(error);
    }
  };

  return (
    <>
       <div className="bg-amber-100 min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 px-4">
        <h1 className="text-3xl font-bold text-gray-900">Random Cat Fact</h1>
        <button 
          onClick={fetchCatFact} 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Get Cat Fact
        </button>
        <p className="text-center text-gray-700 max-w-lg">{fact}</p>
      </div>
    </div>
    </>
  );
}

export default App;
