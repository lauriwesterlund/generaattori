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

  useEffect(() => {
    if (first_names.length > 0 && last_names.length > 0) {
      setName(generateRandomName());
    }
  }, []);

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
          <button
            onClick={() => setName(generateRandomName())}
          >
            Anna hassu nimi
          </button>
        </div>
      </div>
    </>
  )
}

export default App;
