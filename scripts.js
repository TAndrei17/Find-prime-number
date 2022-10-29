// вводишь в поле число, нажимаешь на кнопку, а сайт выдает тебе ближайшее простое число, 
//следующее за введенным, просто в строчку ниже, под полем ввода


function findPrime(num) {
   let numRange = (num + 50); //create a range from n to (n+50)

   nextPrime: for (let i = (num + 1); i < numRange; i += 1) { //take every num from the range
      for (let j = 2; j < i; j += 1) { //every num divided by j (from 2 to i) 
         if (i % j === 0)
            continue nextPrime; // if it equal 0 - a num is not prime, continue with next
      }
      return i; //give me just first prime num and stop;
   }
}

const getResult = () => {
   const number = Number(document.getElementById("firstNumber").value);
   document.getElementById("result").innerHTML = findPrime(number);
};
