const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   process.stdout.write(`${char}`);
// }
let sTime = 100;
for (const char of sentence) {
  // let sArr = process.stdout.write(char);

  //  console.log("sArr", sArr);
  setTimeout(() => {
    //console.log(sArr);
    process.stdout.write(char);
  }, sTime);
  sTime += 100;
  // console.log("after setTimeout");
  
}

setTimeout(() => {
  console.log(" ")
}, (sentence.length +1) *100);
   


