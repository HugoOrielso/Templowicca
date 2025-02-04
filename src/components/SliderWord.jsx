import React, { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const SliderWord = ({words , interval}) => {
    const [ intervalCurrentIndex , setIntervalCurrentIndex] = useState(0)
    const [ listNumber , setListNumbers ] = useState([])
    function numeroRandom (){
        return Math.floor(Math.random() * words.length);
    }

    function verificarNumber (number,lastNumber){
        if(intervalCurrentIndex !== lastNumber){
            setIntervalCurrentIndex(randomNumber)
        }
    }
    useEffect(() => {
        const id = setTimeout(() => {
          let randomNumber = numeroRandom();
          let lastNumber = listNumber[listNumber.length - 1];
      
          while (randomNumber === lastNumber) {
            // Regenera el número si es igual al último número
            randomNumber = numeroRandom();
          }
      
          setListNumbers([...listNumber, randomNumber]);
          setIntervalCurrentIndex(randomNumber);
        }, 5000);
      
        // Devuelve una función de limpieza que se ejecutará cuando el componente se desmonte
        return () => clearTimeout(id);
      }, [intervalCurrentIndex, listNumber]);
      
  return (
    <div className='slider-words'style={{display: "flex", width :"100%", alignItems: "center", justifyContent: "center" }}>
        <p className='words' style={{display: "flex", textTransform: "uppercase"}}> {words[intervalCurrentIndex]} </p>
    </div>
  )
}

export default SliderWord