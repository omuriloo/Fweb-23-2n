let textValue = ''

function addOperator(operator){
    textValue += operator;
    uptadeText();
}

function uptadeText(){
    document.querySelector(".inputcalculadora".value = textValue)
}

function clearText(){
    textValue = '';
    uptadeText();
}

function addNumber(number){
    textValue += number;
    uptadeText();
}

function uptadeText(){
    document.querySelector(".inputcalculadora").value = textValue;
    uptadeText();
}