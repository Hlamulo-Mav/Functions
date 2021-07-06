// Count A
function count_a(word) {
    console.log(word.split(/a/gi).length-1) //gi global regular expression that is case insesitive
  }
  count_a("zazaaaZAAA")

  
  // Count Vowels
  function count_vowels(word) {
    let vowels = "aeiou";  
    console.log(word.match(/[vowels]/gi).length) // word.split(/[vowels]/gi).length -1
  }
  
  count_vowels("saseioo")

  //Sum Nums
  function  sum_nums(max) {
    let sum = 0;
    for(i = 1; i <= max; i++){
      sum += i; 
       }
  console.log(sum)
}

sum_nums(6)

// factorial
function factorial(num) {
    let product = 1;
    for(i = 1; i <= num; i++){
      product *= i; 
       }
  console.log(product)
}

factorial(5) 

// Reverse
function reverse(word) {
    console.log(word.split("").reverse().join(""))
}

reverse("word")

//Goodbye
function Goodbye(name) {
    console.log("goodbye" +" " + name)
  }
  
  Goodbye("zaza")