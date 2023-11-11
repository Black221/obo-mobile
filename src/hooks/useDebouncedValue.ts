import { useState, useEffect } from 'react';



const useDebounceValue = (value: any, delay = 500) => {

    const [debouncedValue, setDebouncedValue] = useState<any>(value);
    
    useEffect(() => {
    
        const handler = setTimeout(() => {
    
        setDebouncedValue(value);
    
        }, delay);
    
        return () => {
    
        clearTimeout(handler);
    
        };
    
    }, [value]);
    
    return debouncedValue;
}

export default useDebounceValue;