import React, {useContext, useState} from 'react';

const SettingsContext = React.createContext();

export const useSettings = () => useContext(SettingsContext);

export function SettingsProvider({children}) {
  const [name, setName] = useState(null);
  const [categories, setCategories] = useState([]);
  const [paymentModes, setPaymentModes] = useState([]);

  /**USE EFFECTS */

  /**GETTERS */
  // Get name from local storage
  // Get categories from local storage
  // Get payment modes from local storage

  /**SETTERS */
  // Set name
  // Update categories list
  // Update payment modes list

  return <SettingsContext.Provider>{children}</SettingsContext.Provider>;
}
