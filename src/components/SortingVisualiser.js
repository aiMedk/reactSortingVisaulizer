import React, { useState } from "react";
import Merge from "../algorithms/Merge";
import Insertion from "../algorithms/Insertion";
import "./SortingVisualizer.css";

const ANIMATION_SPEED_MS = 1;

const PRIMARY_COLOR = "turquoise";

const SECONDARY_COLOR = "red";

export default function SortingVisualiser() {
  var [myArray, setmyArray] = useState([""]);

  const generateRandomValuesForArray = () => {
    myArray = [];
    for (let index = 0; index < 200; index++) {
      myArray.push(randomIntValuesfromInterval(5, 600));
    }
    console.log(myArray.length);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let index = 0; index < arrayBars.length; index++) {
      const barStyle = arrayBars[index].style;
      barStyle.backgroundColor = "darkorange";
    }
    setmyArray(myArray);
  };

  const insertionSort = () => {

    const mAnimations = Insertion(myArray);
    for (let index = 0; index < mAnimations.length; index++) {
        // console.log(JSON.stringify(mAnimations[index]));        
        const arrayBars = document.getElementsByClassName("array-bar");
        const color = mAnimations[index].length === 3 ? SECONDARY_COLOR : 'blue';
        if(mAnimations[index].length === 3){
            console.log(JSON.stringify("3         ",mAnimations[index]));

            const [barOneIdx, barTwoIdx,nulls] = mAnimations[index];
            console.log(nulls);
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;

            }, index* ANIMATION_SPEED_MS)            
        }
        else{
            console.log(JSON.stringify("2         ",mAnimations[index]));
            
            const [arrayBarInd, newHeight] = mAnimations[index];
            const barStyle = arrayBars[arrayBarInd].style;
            setTimeout(() =>{
            barStyle.backgroundColor = color;
            barStyle.height = `${newHeight}px`;         
            }, index * ANIMATION_SPEED_MS);
        }
    }

  };

  const mergeSort = () => {
    const animations = Merge(myArray);
    console.log(JSON.stringify(animations));
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  return (
    <div>
      <div className="array-container">
        {myArray.map((value, ind) => (
          <div
            className="array-bar"
            style={{ height: `${value}px` }}
            key={ind}
          />
        ))}
      </div>
      <button onClick={generateRandomValuesForArray}>New array</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={insertionSort}>Insertion Sort</button>
    </div>
  );
}

const randomIntValuesfromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
