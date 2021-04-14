// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogAge, humanAge) {
  dogAge = humanAge / 7;
  humanAge = dogAge * 7;
  console.log(`Dog's age in human years is ${dogAge}`); 
  console.log(`Human's age in dog years is ${humanAge}`); 
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age , movies) {
  let week;
  week = movies * 4;
  let month ;
  month = 12 * week;
  let moviesWatched;
  moviesWatched = age * month;
  return moviesWatched;
}

calculateMoviesToWatch(21 , 2);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

celsiusToFahrenheit(1);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(fahrenheit) {
  let celsius;
  celsius = (fahrenheit - 32) * 5 * 9;
  return celsius;
}

celsiusToFahrenheit(1);
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n , x) {
  let result;
  if(n < 0){
    console.log(`The number below 1 is not allowed`);
  }else{
    return n ** x
  }
}

pow(3,2);

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n , word) {
  
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  let sum;
  for(let i = 0 ; i < n ; i++){ 
    sum = n + i; 
  }
  return sum;
 
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

function sumOfN(n) {
  let sum = 0;
  for(let i = 0 ; i <= n ; i++){
    if(i % 5 == 0 || i % 7 == 0){
      sum = sum + i;
    }  
  }
  return sum;
 
}


/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(x , y) {
  if(x < y){
    console.log(`${x} is min`);
  }else{
    console.log(`${y} is min`);
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(x) {
  return typeof(x);
}
