import {useEffect} from "react";


export const  useSetHeightOfTextArea = (ref, percentage, style  ) => {

  const necessaryHeightOfTextArea = document.documentElement.clientHeight/100 * percentage
  console.log('необходимая высота текстовой зоны - ' + necessaryHeightOfTextArea)

  useEffect(() => {
    if(ref.current) {
      //ref.current.style.height = 'auto'
      const textAreaHeight = ref.current?.scrollHeight
      console.log('высота текстовой зоны ДО - ' + textAreaHeight)

      if(textAreaHeight >= necessaryHeightOfTextArea) {
        ref.current.style.height = necessaryHeightOfTextArea + 'px'
        console.log('высота текстовой зоны ПОСЛЕ - ' + ref.current.style.height)
        //ref.current.className.add('style')
        return true

        /*ref.current.style.display = 'webkit-box'
        ref.current.style.webkitLineClamp = '20'
        ref.current.style.lineClamp = '20'
        ref.current.style.webkitOrient = 'vertical'
        ref.current.style.overflow = 'hidden'
        ref.current.style.textOverflow = 'ellipsis'*/

        //ref.current.style.textOverflow = 'ellipsis'
        //ref.current.style.overflow = 'hidden'
        //ref.current.style.whiteSpace = 'nowrap'

      }
      else {}
      return false

    }
    else {
      console.log('нету рефа')
    }
  },); //[text]
}