import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  const [lang, setLang] = useState('EN')

  const toggleLang = changLang => {
    setLang(changLang);
  }

  return (
    <Context.Provider value={{lang, toggleLang}}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
