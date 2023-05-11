function evenNum(numbers) {
    const filtered = numbers.filter((num) => num % 2 === 0);
    return filtered;
  }
  console.log(evenNum([1, 2, 3, 4, 5, 6]))