function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

    let result = '';
  for (const { val, sym } of romanMap) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}

// Function to convert Roman numeral to number
function fromRoman(str) {
  const romanToInt = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000,
  };

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const current = romanToInt[str[i]];
    const next = romanToInt[str[i + 1]];

    if (next && next > current) {
      result += next - current;
      i++; // Skip the next character
    } else {
      result += current;
    }
  }
  return result;
}

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
