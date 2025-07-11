import {useEffect} from "react";


export const  useTextAreaExpand = (ref, text,  ) => {

  useEffect(() => {
    if(ref.current) {
      ref.current.style.height = 'auto'
      const textAreaHeight = ref.current?.scrollHeight
      ref.current.style.height = textAreaHeight + 'px'

    }
  }, [text]);
}