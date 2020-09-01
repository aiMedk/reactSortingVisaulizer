
export default function Merge(unSortedArray) {


    
    if(unSortedArray.length <= 1) return unSortedArray;
    
    const middle = Math.floor(unSortedArray.length/2);

    const leftArray= unSortedArray.slice(0, middle);

    const rightArray= unSortedArray.slice(middle);
    
    
    return mergeSort(Merge(leftArray), Merge(rightArray));
}

const animations = [];

function mergeSort(leftArray, rightArray){


    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while(leftIndex < leftArray.length && rightIndex < rightArray.length){

        animations.push(leftArray);
            

        // animations.push([mainArray.indexOf(leftArray[leftIndex]),mainArray.indexOf(rightIndex[rightIndex])]);

        // animations.push([mainArray.indexOf(leftArray[leftIndex]),mainArray.indexOf(rightIndex[rightIndex])]);

        if(leftArray[leftIndex] < rightArray[rightIndex]){
            resultArray.push(leftArray[leftIndex]);
             
            leftIndex++;
        }
        else{
            resultArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

return resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));

}