import React, {useContext, useState} from 'react';

const StorageContext = React.createContext();

export const useStorage = () => useContext(StorageContext);

export function StorageProvider({children}) {
  const [list, setList] = useState([]);

  /**USE EFFECTS */

  /**GETTERS */
  // Get List from local storage
  // Calculate total expense - should intake list of expenses as arguments

  /**SETTERS */
  // Add new expense
  // Update expense list

  return <StorageContext.Provider>{children}</StorageContext.Provider>;
}
