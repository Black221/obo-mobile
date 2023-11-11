import {useContext} from "react";
import { AppContext } from "@contexts/appContext";


const useAppState = () => {
    return  useContext(AppContext)
}

export default useAppState;