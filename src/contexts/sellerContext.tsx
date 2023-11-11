import { createContext } from "react";


const SellerStateContext = createContext<any | null>(null);

const SellerDispatchContext = createContext<any | null>(null);

export const SellerProvider = ({ children }: {children: JSX.Element}) : any => {

    
    
    return (
        <SellerStateContext.Provider value={{

        }}>
            {children}
        </SellerStateContext.Provider>
    );
};