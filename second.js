// first step to select (form) button bcz it has submit button

const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault() // to prevent default behaviour of form submit button

    const height = parseInt(document.querySelector('#height').value)// to get value from input field and convert it into integer using parseInt
    const weight = parseInt(document.querySelector('#weight').value)// to get value from input field and convert it into integer using parseInt
    const results = document.querySelector('#results')// to select the div where we want to show the result

    if(height ==="" || height < 0 || isNaN(height)){ // to check if the height is empty or less than 0 or not a number
        results.innerHTML = `Please enter a valid height ${height}`;// isNaN is used to check if the value is not a number
    }else if(weight ==="" || weight < 0 || isNaN(weight)){ // to check if the weight is empty or less than 0 or not a number
        results.innerHTML = `Please enter a valid weight ${weight}`;// isNaN is used to check if the value is not a number
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2); // to calculate the BMI and round it to 2 decimal places using toFixed method
        results.innerHTML = `<span>${bmi}</span>`;
    }

})