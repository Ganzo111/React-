function countUnique(arr){
      let unique = []
      for (let i = 0; i < arr.length; i++){
            if (!unique.includes(arr[i])){
                  unique.push(arr[i])
            }
      }
      return unique.length
}

console.log(countUnique([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]))