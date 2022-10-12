// SNACK 1

const btnSnack1 = document.getElementById('btn_snack_1');

const Stampa = function(){
    let inputSnack1 = parseInt(document.getElementById('input_snack_1').value);
    if(isNaN(inputSnack1)){
        alert('Puoi inserire solo numeri! Riprova');
    } else if(inputSnack1 % 2 == 0){
        document.querySelector('.text_snack_1').innerHTML = inputSnack1;
    } else {
        document.querySelector('.text_snack_1').innerHTML = inputSnack1+1;
    }
    inputSnack1 = document.getElementById('input_snack_1').value = '';


}
btnSnack1.addEventListener('click', Stampa);


// SNACK 2
const btnSnack2 = document.getElementById('btn_section_2');
const firstNameArray = ['Marco', 'Luca', 'Andrea', 'Giovanni', 'Francesco', 'Paolo', 'Giacomo', 'Simone', 'Giulio', 'Alberto'];
const lastNameArray = ['Rossi', 'Bianchi', 'Verdi', 'Esposito', 'Fumagalli', 'Fantozzi', 'Kojima', 'Smith', 'McDonald', 'Zuckemberg'];

const nameGenerator = function(){
    let randomNameIndex = Math.floor(Math.random()*firstNameArray.length);
    let randomSurnameIndex = Math.floor(Math.random()*firstNameArray.length);
    let randomFirstName = firstNameArray [randomNameIndex]; 
    let randomLastName = lastNameArray [randomSurnameIndex];      
    document.querySelector('.text_snack_2').innerHTML = `${randomFirstName} ${randomLastName}`;
}
btnSnack2.addEventListener('click', nameGenerator);

// SNACK 3 

const btnSnack3 = document.getElementById('btn_section_3');
const calcola = function(){
    const arraySnack3 = [1 , 20 , 40 , 56 , 55 , 36 , 7 , 8 , 9 , 103];
    const oddArray = [];
    for(i = 0; i < arraySnack3.length; i++){
    oddArray.push(arraySnack3[1] + arraySnack3[3] + arraySnack3[5] + arraySnack3[7] + arraySnack3[9]);
    console.log(oddArray[i]);
    document.querySelector('.text_snack_3').innerHTML = oddArray[i];
    }
}

btnSnack3.addEventListener('click', calcola);