function mostFreqString(str) {
    const freq = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
    if (!freq[char]) {
        freq[char] = 1;
      } else {
       
        freq[char]++;
      }
    }
    let mostFreqChar = null;
    let highestFreq = 0;
    for (const char in freq) {
      if (freq[char] > highestFreq) {
        mostFreqChar = char;
        highestFreq = freq[char];
      }
    }
    return mostFreqChar;
  }
 console.log(mostFreqString("hello world"));
 