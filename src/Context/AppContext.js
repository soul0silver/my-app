import { createContext } from "react";
import { useState, useEffect } from "react";

import data from "../view/product";
export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
          const [detail, setDetail] = useState();
          const [items, setItems] = useState([]);
          const [item, setItem] = useState([]);
          useEffect(() => {
                    setItems(() => {
                              const data = JSON.parse(window.localStorage.getItem('items'));
                              if (data === null) return [];
                              return data
                    } )
          }, [])
         
          const [showcart, setShowcart] = useState(false);

          const [user, setUser] = useState(null)
          useEffect(() => {
                    setUser(JSON.parse(window.localStorage.getItem('user')));

          }, [])
          useEffect(() => {
                     setItem(data.product)
          }, []);
         window.localStorage.setItem('item',JSON.stringify(data))
          return <AppContext.Provider value={{ item, detail, setDetail, setItem, items, setItems, showcart, setShowcart, user, setUser }}>
                    {children}
          </AppContext.Provider>
}