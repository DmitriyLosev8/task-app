import {useEffect} from "react";


export const  UseClickOutSide = (ref, callback, bool) => {
  const handleClick = (event) => {
    if(ref.current && !ref.current.contains(event.target)) {
      callback()
      console.log('привет')
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown",handleClick)
    return () => {
      document.removeEventListener("mousedown",handleClick)
    }
  }, [bool]);
}

