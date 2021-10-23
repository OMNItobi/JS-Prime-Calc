//isPrime() from https://stackoverflow.com/a/40200710
//Primes

var i;

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function getPrime(sampleNumber){
      prime= Math.sqrt((24*sampleNumber)+1);

      if(isPrime(prime)){
        if(Number.isInteger(prime)){
         console.log(prime);
       return prime;
        }
      }     
}
for(var n=1;n<1000000;n++){
  getPrime(n);
}