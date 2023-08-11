import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
          const [item, setItem] = useState([]);
          useEffect(() => {
                    axios.get('http://127.0.0.1:5501/my-app/src/view/prod.json').then(res => setItem(res.data.data.product))}, []);
          

          return <AppContext.Provider value={{ item }}>
                    {children}
          </AppContext.Provider>
}