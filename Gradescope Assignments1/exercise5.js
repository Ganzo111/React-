function pushMultiplySum(vec,x) {
    vec.push(x);
      let sum = 0;
    for (let i = 0; i < vec.length; i++) {
        sum += vec[i] * 2;
    }
    return sum;
}