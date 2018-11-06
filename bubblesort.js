// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++){
        
//     }
//     return arr;
// }

// bubbleSort.shouldSort = (elem1, elem2, arr) => {
//     if (elem1 > elem2){
//         return bubbleSort.swap(arr.indexOf(elem1), arr.indexOf(elem2), arr);
//     }
// }

bubbleSort.swap = (leftIdx, rightIdx, arr) => {
  const temp = arr[rightIdx];
  arr[rightIdx] = arr[leftIdx];
  arr[leftIdx] = temp;
}


function bubbleSort(array) {
    let isSorted = false;
    let count = 0;
    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < array.length - 1 - count; i++) {
            if (array[i] > array[i + 1]) {
                // could abstract the tree lines below into swap function
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSorted = false;
            }
        }
        count++;
    }
    return array;
}

console.log(bubbleSort([5, 7, 10, 2]));
