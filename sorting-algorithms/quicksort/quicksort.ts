// array to sort
const arrayForQuicksort: number[] = [3, 2, 5, 6, 4, 9, 7, 10, 1, 8]

// basic implementation (pivot is the first element of the array)
const quicksort = (array: number[]): number[] => {
  if(array.length < 2) {
    return array
  }

  const pivot: number = array[0]
  const lesser: number[] = []
  const greater: number[] = []

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i])
    } else {
      greater.push(array[i])
    }
  }

  return quicksort(lesser).concat(pivot, quicksort(greater))
}

console.log(quicksort(arrayForQuicksort.slice())) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]