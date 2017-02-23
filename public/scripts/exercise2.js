var numberToGuess

function getRandomNumber(){
    numberToGuess = Math.floor(Math.random() * 10 + 1);


}
function checkValue(input){
    if(isNaN(input.value)){
        alert(input.value + ' is not a number. Try it again!');
        input.value = '';
        input.focus();

    }
    else{
        var number =Number(input.value);

        if(number < 1 || number > 10){
            alert(number + 'is not between 1 and 10');

        }
    }
}

function check(){
    var input = document.getElementById('guessnumber');
    var guessnumber = Number(input.value);

    if(guessnumber == numberToGuess){
        alert('Congratualtions you guessed the number');

    }else{
        alert('Wrong Number, try it again!!!');

    }
    }
