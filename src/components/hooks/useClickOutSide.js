import {useEffect} from "react";


export const  UseClickOutSide = (ref, callback) => {
  const handleClick = (event) => {
    if(ref.current && !ref.current.contains(event.target)) {
      callback()
      console.log('привет')
    }
  }
  useEffect(() => {
    document.addEventListener("click",handleClick)
    return () => {
      document.removeEventListener("click",handleClick)
    }
  }, []);
}

