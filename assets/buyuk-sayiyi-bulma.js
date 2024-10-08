let firstNumber= prompt('ilk sayıyı giriniz:');
let secondNumber= prompt('ikinci sayıyı giriniz:');
let thirdNumber= prompt('üçüncü sayıyı giriniz:');
let theBiggest;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber ) {

  theBiggest= firstNumber;

}

else if (secondNumber >= firstNumber && secondNumber >= thirdNumber ) {

  theBiggest= secondNumber;

}

else {

  theBiggest= thirdNumber;
}

alert('en büyük sayı= ' + theBiggest);