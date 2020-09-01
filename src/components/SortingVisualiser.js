import React, {useState} from 'react'
import Merge from '../algorithms/Merge'
import "./SortingVisualizer.css"


export default function SortingVisualiser() 

{ 
    var [myArray, setmyArray] = useState(['']);   

    const generateRandomValuesForArray  = () =>{
        myArray = [];
        for (let index = 0; index < 200; index++) {
            myArray.push(randomIntValuesfromInterval(5, 600));
        }
        console.log(myArray.length);
        setmyArray(myArray);
    }

const    mergeSort = () => {
      setmyArray(Merge(myArray));
  }


    return (
        <div>
        <div className="array-container">
            {
                myArray.map( (value, ind) => (<div className="array-bar" style={{height: `${value}px`}} key={ind}/>   ))
            }            
        </div>
        <button onClick={generateRandomValuesForArray}>New array</button>
        <button onClick={mergeSort}>Merge Sort</button>
        
        </div>

    )
}

const randomIntValuesfromInterval = (min,  max) => {

    return Math.floor(Math.random()*(max - min + 1)+min);
}