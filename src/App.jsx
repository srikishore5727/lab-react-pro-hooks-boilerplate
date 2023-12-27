import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css';

const LARGE_NUMBER = 1000000000;

function App() {
  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState('dark');
  const [currentList, setList] = useState([]);

  const delayFunction = useMemo(() => {
    console.log('Delay Function Ran');
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return value + 2;
  }, [value]);

  const testFunction = useMemo(() => [value * 3, value * 4], [value]);

  useEffect(() => {
    console.log('Callback Function was called');
  }, [testFunction]);

  useEffect(() => {
    setThemeName(dark ? 'dark' : 'light');
  }, [dark]);

  const handleClick = useCallback(() => {
    setTheme((prevDark) => !prevDark);
  }, []);

  const handleChangeValue = useCallback(() => {
    setValue((prevValue) => prevValue + 1);
  }, []);

  const handleList = useCallback(() => {
    setList(testFunction);
  }, [testFunction]);

  const styleTheme = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : '#ccc7c7',
    };
  }, [dark]);

  return (
    <div className="page" style={styleTheme}>
      <button onClick={handleClick}>{themeName}</button>
      <h1>{value}</h1>
      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleList}>Show List</button>
      <h2>{delayFunction}</h2>
      <div>
        {currentList.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;
