function bubbleSort(arr) {
    let sorted = [];
    for (let i = 0; i < arr.length; i++){
        //sort
    }
    return sorted;
}

bubbleSort.shouldSort = (elem1, elem2) => {
  
}

bubbleSort.swap = (leftIdx, rightIdx, array) => {
  const temp = array[rightIdx];
  array[rightIdx] = array[leftIdx];
  array[leftIdx] = temp;
}
