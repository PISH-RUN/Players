import React, { useState } from 'react';

const PinContext = React.createContext<any>({});


export type PinProviderProps = {
  children: JSX.Element;
};

const PinProvider = ({ children }: PinProviderProps) => {
  const [pins, setPins] = useState([]);

  return <PinContext.Provider value={{pins, setPins}}>
    {children}
  </PinContext.Provider>
}

export const usePin = () => React.useContext(PinContext);

export default PinProvider;
