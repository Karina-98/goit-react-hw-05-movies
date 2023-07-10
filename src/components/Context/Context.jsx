import React, { useContext, useState } from 'react';

const Context = React.createContext();

export const useCustomContext = () => {return useContext(Context)};

export const ContextMovie = ({ children }) => {
  const [search, setSearch] = useState([]);

  return (
    <>
      <Context.Provider value={{ search: search, setSearch: setSearch }}>
        {children}
      </Context.Provider>
    </>
  );
};
