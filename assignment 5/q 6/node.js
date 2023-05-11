function pluck(objects, key) {
    const values = objects.map((obj) => obj[key]);
    return values;
  }
  console.log( pluck([{ name: "John", age: 30 },{ name: "Jane", age: 25 },],"name"));