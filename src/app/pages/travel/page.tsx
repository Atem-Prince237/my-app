"use client"
import React, { useEffect, useState } from 'react';

// Define valid city names as a union type
type City = 'Douala' | 'Buea' | 'Bamenda' | 'Kumba' | 'Limbe';

// Define the props interface
interface TimeDestinationProps {}

// Styles for component
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("/sm.jpeg")', // Replace with your bus image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFFFFF', // blue text for visibility
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '4.5rem',
    margin: '3.5rem 0',
  },
  table: {
    marginTop: '40px',
    borderCollapse: 'collapse',
    width: '100%', // Increased width for the table
    maxWidth: '1000px', // Max width for better responsiveness
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for visibility
  },
  tableCell: {
    border: '3px solid #FFFFFF',
    padding: '40px', // Increased padding for better spacing
    textAlign: 'center',
  },
  select: {
    padding: '5px',
    fontSize: '2rem',
    margin: '30px 0',
    width: '100%', // Full width for dropdowns
  },
};

const timeOffsets: Record<City, number> = {
  Douala: 1,    // GMT+1
  Buea: 1,      // GMT+1
  Bamenda: 1,   // GMT+1
  Kumba: 1,     // GMT+1
  Limbe: 1,     // GMT+1
};

const TimeDestination: React.FC<TimeDestinationProps> = () => {
  const [currentLocation, setCurrentLocation] = useState<City>('Buea'); // Default to Buea
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCity, setSelectedCity] = useState<City>('Douala');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    setLoading(false);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const adjustTimeForDestination = () => {
      const offset = timeOffsets[selectedCity];
      const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000; // Convert to UTC
      const adjustedTime = new Date(utcTime + offset * 3600000); // Adjust for selected city's offset
      setCurrentTime(adjustedTime);
    };

    adjustTimeForDestination();
  }, [currentTime, selectedCity]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLocation(event.target.value as City);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value as City);
  };

  return (
    <div style={styles.container}>
    <h1  style={{ fontSize: "3rem", color: "blue", margin: "px20"}} className="px-60 text-left justify-start font-bold ">Welcome to Go-Trip</h1>
      
    <table style={styles.table} >
        <tbody>
          <tr>
              <td style={styles.tableCell}  >
              <h2 className="text-start">SELECT LOCATION</h2>
              <select style={styles.select} value={currentLocation} onChange={handleCityChange}>
                <option value="Douala">Douala</option>
                <option value="Buea">Buea</option>
                <option value="Bamenda">Bamenda</option>
                <option value="Kumba">Kumba</option>
                <option value="Limbe">Limbe</option>
              </select>
            </td>
            <td style={styles.tableCell}>
              <h2 className="text-start">SELECT DESTINATION</h2>
              <select style={styles.select} value={selectedCity} onChange={handleLocationChange}>
                <option value="Douala">Douala</option>
                <option value="Buea">Buea</option>
                <option value="Bamenda">Bamenda</option>
                <option value="Kumba">Kumba</option>
                <option value="Limbe">Limbe</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={4} style={styles.tableCell}>
              <h2 className=" bg-blue-500 px-6 py-4 text-white text-lg font-bold"> HAVE A SAFE TRIP</h2>
            </td>
          </tr>
        </tbody>
      </table>
      
      {loading ? (
        <p style={{ color: '#FFFFFF' }}>Loading location...</p>
      ) : error ? (
        <p style={{ color: '#ff3b3b' }}>{error}</p>
      ) : null}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <TimeDestination />
    </div>
  );
};

export default App;