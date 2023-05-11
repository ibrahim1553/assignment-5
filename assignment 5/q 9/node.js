function stringLength(strings) {
    const lengths = [];
    for (let i = 0; i < strings.length; i++) {
      lengths.push(strings[i].length);
    }
    console.log(lengths);
  }
  const strings = ["hi", "hello", "hey", "howdy"];
  const lengths = stringLength(strings);
  
    