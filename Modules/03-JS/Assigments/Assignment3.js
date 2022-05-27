function factorial(anyNumber){  
    // your code
    let total = 1
    for(let i = 1; i <= anyNumber; i++){
        total *= i   
    }
    
    return total
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)