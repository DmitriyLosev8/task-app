import {useEffect} from "react";


export const  useClickOutside = (ref, callback, isOpen) => {
  const handleClick = (event) => {
    if(ref.current && !ref.current.contains(event.target)) {
      callback()
      console.log('ВызвалсяЫ')
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown",handleClick)
    return () => {
      document.removeEventListener("mousedown",handleClick)
    }
  }, [isOpen]);
}

