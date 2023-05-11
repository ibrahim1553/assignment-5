function pairnum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [numbers[i], numbers[j]];
        }
      }
    }
    return null;
  }
  console.log(pairnum([1, 2, 3, 4], 5));