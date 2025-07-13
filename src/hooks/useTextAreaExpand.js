import {useEffect} from "react";


export const  useTextAreaExpand = (ref, text,  ) => {

  const halfOfWindowInnerHeight = document.documentElement.clientHeight/2

  useEffect(() => {
    if(ref.current) {
      ref.current.style.height = 'auto'
      const textAreaHeight = ref.current?.scrollHeight

      if(textAreaHeight < halfOfWindowInnerHeight) {
        ref.current.style.overflowY = 'hidden'
        ref.current.style.height = textAreaHeight + 'px'
      }
      else {
        ref.current.style.height = halfOfWindowInnerHeight + 'px'
        ref.current.style.overflowY = 'auto'
      }
    }
  }, [text]);
}