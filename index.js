// Is Div By Five

function is_div_by_5(number) {
    if (number % 5=== 0) { 
        console.log(true);
    } else{
        console.log(false);
    }
  
}

 is_div_by_5(50)

// Either Only

function either_only(num) {
    if((num % 3== 0 && num % 5!=0) ||( num % 5==0 && num %3!=0)) {
        console.log(true)
    }else {
        console.log(false)
    }
  
}

either_only(30) 


// Larger Number

function  larger_number(num1, num2) {
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

larger_number(3, 6)

// Word check
function word_check(word) {
    if ((word.length) < 6) {
      console.log("short")
    } else if ((word.length) == 6){
      console.log("medium")
    } else {
        console.log("long")
    }
}
word_check("worddddd")

// Count E
function count_e(word) {
    console.log(word.split('e').length-1)
  }
 
  count_e("zeeeez")
 