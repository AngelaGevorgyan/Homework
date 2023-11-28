function sumEvenNumbers(number) {
    let i = 1;             
    let sum = 0;          
    while (i <= number) {       
        i++;               
        if (i % 2 === 0) { 
            sum = i + sum; 

        }
    }

    alert(sum)
}          
sumEvenNumbers(10)