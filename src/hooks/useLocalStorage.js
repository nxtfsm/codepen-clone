import { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [ value, setValue ] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)

    if (jsonValue === JSON.stringify("") || !jsonValue) {
      return initialValue()
    } else { return JSON.parse(jsonValue) }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
