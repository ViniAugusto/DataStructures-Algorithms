const binarySearch = (array, goal) => {
    let lower = 0;
    let high = array.length -1;
   
    while(lower <= high){
        const middle = lower + Math.floor((high - lower) / 2);
        console.log(lower,high, middle)

        if(goal === array[middle]){
            return middle;
        }

        if(goal < array[middle]){
            high = middle - 1;
        } else {
            lower = middle + 1;
        }
    }

    return -1
}

const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(binarySearch(values, 15))