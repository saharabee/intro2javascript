function findClick(){
    var numbersList = document.getElementById('numbersList').value;
    var numbersArray = numbersList.split(',')
    for(var i = 0;i<numbersArray.length; i++){

        if(isNaN(numbersArray[i]) || numbersArray[i].length == 0){
            alert(numbersArray[i] + ' this value is not a number ');

            return;
        }
    }
     var accumulator = 0;

     for(var i = 0; i < numbersArray.length; i++){
         var value = Number(numbersArray[i]);
         accumulator = accumulator + value;

     }
var average = accumulator / numbersArray.length

        alert('The average is: ' + average);
}

