import { useEffect, useState, useRef } from "react"
import Back from "../Back";


let data = ['apple', 'banana', 'peach', 'papaya', 'amrood', 'nimbu', 'kathal'];

function SearchTab() {
    const [show, setShow] = useState(false)
    const [list, setList] = useState([])
    const [value, setValue] = useState('a')
    const inpRef = useRef(null)
    const searchResultRef = useRef(null)

    // const debounce = useDebounce(value, 500)

    const handleShow = (e) => {
        if (e.target != inpRef.current && e.target != searchResultRef.current) {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleShow)
        return () => {
            window.removeEventListener('click', handleShow)
        }
    }, [])

    // const makingFetch = () => {
    //     const dataList = data.filter((item) => {
    //         return item.includes(value)
    //     })
    //     setList(dataList)
    // }

    // useEffect(() => {
    //     makingFetch()
    // }, [value])


    const handleChange = (e) => {
        setValue(e.target.value)
        const dataList = data.filter((item) => {
            return item.includes(value)
        })
        setList(dataList)
    }

    return (
        <div className="searchTab">
            <Back/>
            <input
                ref={inpRef}
                onChange={handleChange}
                value={value}
                onFocus={() => setShow(true)}
                type="text" placeholder="Search.." name="search"
            />

            {show &&
                <div ref={searchResultRef} className="searchResults">
                    {list.map((item, index) => {
                        return <div className="suggestions" onClick={() => setValue(item)} key={index}>{item}</div>
                    })}
                </div>
            }
        </div>
    )
}

export default SearchTab