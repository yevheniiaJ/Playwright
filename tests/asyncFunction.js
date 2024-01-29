// Function #1

async function myFunction(num, repeat) {
     if (num > 0 && repeat > 0) {
          return Math.pow(num, repeat);
     } else {
          return "typeof isn't correct"
     }
}

myFunction(2, "tyty").then((res) => {
     console.log(res);
     return res;
}).then((res) => {
     if (res > 0) {
          console.log(res + 100.25);
     } else {
          console.log("error");
     }
})

//function #2

async function count(anyString) {
     if (anyString.length <= 5) {
          return (anyString.split(''));
     } else {
          return anyString.length;
     }
}

count("cool").then((result) => {
     if (typeof result == 'number') {
          console.log('This is number');
     } else {
          console.log('this is array');
     }
     return result;
}).then((result) => {
     console.log(`It was good result ${result}`);
     return result;
}).then((result) => {
     if (typeof result == 'number') {
          console.log(result * 10)
     } else {
          console.log(`error`)
     }
})

//function #3

async function sampleFunction(numbers) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (numbers > 0) {
                    resolve(Math.pow(numbers, 2))
               } else {
                    reject('We got an arror');
               }
          }, 3000);
     })
}

sampleFunction(12).then((result) => {
     console.log(`We were able to get a result ${result}`);
     return result;
}).then((result) => {
     console.log(`Getting array = ` + result.toString().split(""));
})