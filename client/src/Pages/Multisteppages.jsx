import  { useState } from 'react'

function Multisteppages(page) {
    const [current, setCurrent] = useState(0)

    function next() {
        setCurrent(i => {
          if (i >= page.length - 1) return i
          return (i + 1)
        })
      }
    
      function back() {
        setCurrent(i => {
          if (i <= 0) return i
          return i - 1
        })
      }

  return (
    {next,back,current, page: page[current], length: page.length}
  )
}

export default Multisteppages