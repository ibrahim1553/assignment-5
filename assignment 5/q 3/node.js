function sum2LargestNum(numbers) {
    let largest1 = 0;
    let largest2 = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest1) {
        largest2 = largest1;
        largest1 = numbers[i];
      } else if (numbers[i] > largest2) {
        largest2 = numbers[i];
      }
    }
    return largest1 + largest2;
  }
  console.log(sum2LargestNum([1, 2, 3, 4]));