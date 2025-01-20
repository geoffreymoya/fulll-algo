export function fizzBuzz( max ) {
    let i = 1n;
    while(i <= max) 
    {
        let content = ""
        if(i%3n == 0n)
            content+="Fizz"
        if(i%5n == 0n)
            content+="Buzz"
        if(content=="")
            content+=i;
        console.log(content)
        i++;
    }
}