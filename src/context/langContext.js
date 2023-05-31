import React, { createContext, useState } from 'react';

export const Context = createContext();

const supportlang = ['EN', 'FR', 'AR', 'ES'];

let browserlang = navigator.language.slice(0,2).toUpperCase();

if (supportlang.indexOf(browserlang) === -1) {
    console.log("not supported");
    browserlang = 'EN';
    
}

const ContextProvider = (props) => {
  const [lang, setLang] = useState(browserlang)

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
