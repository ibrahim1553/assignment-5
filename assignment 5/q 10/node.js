function firstGreater(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= 10) {
        return i;
      }
    }
    return -1;
  }
  const greatNum = [1, 5, 15, 8, 12];
  const index = firstGreater(greatNum);
  console.log(index);