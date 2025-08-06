import {useEffect} from "react";


export const  useSetHeightOfTextArea = (ref, percentage,  setExpandOfTextArea, setNotExpandOfTextArea  ) => {

  const necessaryHeightOfTextArea = document.documentElement.clientHeight/100 * percentage
  console.log('необходимая высота текстовой зоны - ' + necessaryHeightOfTextArea)


  useEffect(() => {
    if(ref.current) {
      const textAreaHeight = ref.current?.scrollHeight
      const numberOfLinesInTextArea =  Math.round(necessaryHeightOfTextArea/100 * 4)
      const currentLineHeight = necessaryHeightOfTextArea/numberOfLinesInTextArea
      console.log('высота текстовой зоны ДО - ' + textAreaHeight)
      console.log('количество строк должно быть - ' + numberOfLinesInTextArea)

      if(textAreaHeight >= necessaryHeightOfTextArea) {
        ref.current.style.height = necessaryHeightOfTextArea + 'px'
        ref.current.style.setProperty('--number-of-lines-in-task-text-area', numberOfLinesInTextArea)
        ref.current.style.lineHeight = currentLineHeight + 'px'
        //document.documentElement.style.setProperty('--number-of-lines-in-task-text-area', 'numberOfLinesInTextArea');
        console.log('высота текстовой зоны ПОСЛЕ - ' + ref.current.style.height)
        setExpandOfTextArea()
      }
      else {
        ref.current.style.height = 'auto'
        setNotExpandOfTextArea()
      }
    }
    else {
      console.log('нету рефа')
    }
  },) //[text]  [ref.current.style.height]
}