// Is Div By Five

function is_div_by_5(number) {
    if (number % 5=== 0) { 
        console.log(true);
    } else{
        console.log(false);
    }
  
}

//is_div_by_5(50)

// Either Only

function either_only(num) {
    if((num % 3== 0 && num % 5!=0) ||( num % 5==0 && num %3!=0)) {
        console.log(true)
    }else {
        console.log(false)
    }
  
}

either_only(30) 
