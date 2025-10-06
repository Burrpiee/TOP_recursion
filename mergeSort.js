function mergeSort(array) {
    // If array has 0 or 1 elements, return the array
    if (array.length <= 1) return array;

    // Calculate halfway point of array
    const halfwayPoint = Math.floor(array.length / 2);
    // Breakdown the left array using recursion
    const leftArray = mergeSort(array.slice(0, halfwayPoint));
    // Do the same to the right array
    const rightArray = mergeSort(array.slice(halfwayPoint));

    // Make new arrays and sort the left and right arrays into them.
    const newArray = new Array();

    // While the both arrays being compared are populated
    while(leftArray.length || rightArray.length) {

        // If first element of left array is less than right or right is empty
        if((leftArray.length && leftArray[0] <= rightArray[0]) || !rightArray.length){
            // Push and remove the first element of the left array into the merged array.
            newArray.push(leftArray.shift());
            // Else push the right element
        } else newArray.push(rightArray.shift());
    }
    // Return the newly formed array
    return newArray;
}

// Test scenarios
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));