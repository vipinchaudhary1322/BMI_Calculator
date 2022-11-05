function calculateBmi(){
    let x=document.getElementById('age').value ;
    let text;
    if(isNaN(x)||x<2||x>120){
        text="Please provide an age between 2 and 120";
    }else{
        text="Please fill the require fields"
    }
    document.getElementById('message').innerHTML=text;
    let weight=document.getElementById('weight').value 
    let height=document.getElementById('height').value 

    let bmi= (weight /(height*height))

    document.getElementById('heading').innerHTML= "BMI :"
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2);

    if(bmi <=24.9){
        document.getElementById('message').innerHTML= 'you are underweight'
    }else if (bmi >= 25 && bmi <= 29.9){
        document.getElementById('message').innerHTML= 'you are a healthy weight'
    }else{
        document.getElementById('message').innerHTML = "Please fill the data"
    }
}
// function calculateBmi (){
    
// }
function reload(){
    window.location.reload()
}

