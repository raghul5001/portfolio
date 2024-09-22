import { createContext, useContext } from "react";

export const AppContext = createContext();
const useAppContext = () => {
    const appContextItems=   useContext(AppContext)

    return appContextItems
};

export default useAppContext; 