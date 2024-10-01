import { createContext, useState } from 'react';
import { GlobalProvider_TP } from '../Types';
import { allProjects } from '../utlities/data';

// Create the context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }:GlobalProvider_TP) => {
    const [allProject,setAllProjects] = useState(allProjects)   

    return (
        <GlobalContext.Provider value={{ allProject,setAllProjects }}>
        {children}
        </GlobalContext.Provider>
    );
};