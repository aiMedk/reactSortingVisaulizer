export default function insertionSort(unsortedArray) {
  const animations = [];

  unsortedArray.forEach((element, i) => {
    let currentNum = unsortedArray[i];
    let nextNum;
    let isPermute = false;
    for (
      nextNum = i - 1;
      nextNum >= 0 && unsortedArray[nextNum] > currentNum;
      nextNum--
    ) {
        isPermute = true;
      animations.push([i, nextNum, null]);
      animations.push([nextNum + 1, unsortedArray[nextNum]]);
      unsortedArray[nextNum + 1] = unsortedArray[nextNum];
    }
    
    isPermute && animations.push([nextNum + 1, currentNum]);
    unsortedArray[nextNum + 1] = currentNum;
  });

  return animations;
}
