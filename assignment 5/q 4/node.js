function sring(strings) {
    const filtered = strings.filter((str) => str.length > 3);
    return filtered;
  }
  console.log(sring(["hi", "hello", "hey", "howdy"]));