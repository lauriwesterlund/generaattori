import { useState, useEffect } from 'react';
import './App.css';
import { first_names, last_names } from './names.json';

const generateRandomName = () => {
  const firstName = first_names[Math.floor(Math.random() * first_names.length)];
  const lastName = last_names[Math.floor(Math.random() * last_names.length)];
  return { firstName, lastName };
};

const App: React.FC = () => {
  const [name, setName] = useState<{ firstName: string, lastName: string } | null>(null);
  const [history, setHistory] = useState<Array<{ firstName: string, lastName: string }>>([]);

  useEffect(() => {
    if (first_names.length > 0 && last_names.length > 0) {
      setName(generateRandomName());
    }
  }, []);

  const handleNewName = () => {
    if (name) {
      setHistory(prevHistory => {
        const newHistory = [name, ...prevHistory];
        if (newHistory.length > 5) {
          newHistory.pop(); // Keep only the last 5 names
        }
        return newHistory;
      });
    }
    setName(generateRandomName());
  };

  return (
    <>
      <div className="wrapper">
        <div className="name">
          {name &&
            <>
              <h1>{name.firstName}</h1>
              <h1>{name.lastName}</h1>
            </>
          }
        </div>
        <div className="card">
          <button onClick={handleNewName}>
            Anna hassu nimi
          </button>
        </div>
        <div className="history">
          {history.map((item, index) => (
          <p key={index}>
          {item.firstName.endsWith('-') ? `${item.firstName}${item.lastName}` : `${item.firstName} ${item.lastName}`}
          </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
