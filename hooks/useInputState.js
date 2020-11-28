import { useState } from 'react'

const useInputState = (initialVal = '') => {
  const [value, setValue] = useState(initialVal)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleClick = () => {
    setValue('')
  }
  return [value, handleChange, handleClick]
}
export default useInputState
