

export default function Merge(unSortedArray) {

    const animations = [];    
    if(unSortedArray.length <= 1) return unSortedArray;
    const auxArray  = unSortedArray.slice();

    Helper(unSortedArray, 0, unSortedArray.length -1, auxArray, animations);
    
    return animations;
}


function Helper(mainArray, startInd, endInd, auxArray, animations){

    
    if(startInd === endInd) return;

    const middle = Math.floor((startInd + endInd)/2);
    Helper(auxArray, startInd, middle, mainArray, animations);
    Helper(auxArray, middle + 1, endInd, mainArray, animations);
    mergeSort(mainArray, startInd, middle, endInd, auxArray, animations)    

}


function mergeSort(mainArray, startInd, middle, endInd, auxArray, animations){

    let k = startInd;
  let i = startInd;
  let j = middle + 1;
  while (i <= middle && j <= endInd) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxArray[i] <= auxArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }
  while (i <= middle) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];
  }
  while (j <= endInd) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxArray[j]]);
    mainArray[k++] = auxArray[j++];
  }


}