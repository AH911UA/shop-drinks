import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export const ThrobberContext = React.createContext(null);

export default function ThrobberContextProvider({ children }) {

    const [throbber, setthrobber] = useState(<div className="throbeer">
                                                    <Loader type="Bars"
                                                        color="#EEEEEE"
                                                        height={100}
                                                        width={100} />
                                            </div>)
    
  return (
    <ThrobberContext.Provider
        value={{throbber}}
    >
      {children}
    </ThrobberContext.Provider>
  );
}