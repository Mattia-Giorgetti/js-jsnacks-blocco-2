// SNACK 1

const btnSnack1 = document.getElementById('btn_snack_1');

const Stampa = function(){
    let inputSnack1 = parseInt(document.getElementById('input_snack_1').value);
    if(inputSnack1 % 2 == 0){
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
    
    let evenArray = [];
    const arraySnack3 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15];
    for(let i = 0; i < arraySnack3.length; i++){
        if(i % 2 === 0) {
            evenArray.push(i);
            console.log(evenArray);
    
            //document.querySelector('.text_snack_3').innerHTML = evenArray;
            
        }
        
    }
}

btnSnack3.addEventListener('click', calcola);
