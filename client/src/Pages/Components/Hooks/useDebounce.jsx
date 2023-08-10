import { useState, useEffect } from 'react'

function useDebounce(value, delay = 500 ) {
    const [debounce, setDebounce] = useState(value)
    
    useEffect(() => {

        const id = setTimeout(() => {
            setDebounce(value)
        }, delay);
        
        return ()=>{
            clearTimeout(id)
        }
    }, [value, delay])

    return debounce

}

export default useDebounce