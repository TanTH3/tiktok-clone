import { useState, createContext } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState('');

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export { DataContext, DataProvider };
