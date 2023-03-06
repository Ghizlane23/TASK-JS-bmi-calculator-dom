function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  // You are going to write the code here before the curly braces 👇🏻
  const BMI= weight/(height * height*0.0001);
  if(BMI<18.5)
   {
    alert("you are underweight") 
  } else
  {
      if(BMI>=18.5 && BMI<=24.9){
       alert("you are healthy")
      }else
      {
           if(BMI>=25.0 && BMI<=29.9){
           alert("you are overweight")
          }else{
           alert("you are suffering from obesity")
          }
        }
      }
    }
  
//challenge 3
if(age>=19 && age<=24)
{
  
  if (BMI >= 19 && BMI <= 24){
    alert("you are healthy")
  }else if (BMI < 19){
    alert("you are underweight")
  }else{
    alert("you are overweight")
  }

} elseif(age>=25 && age<=34)
{
  if(BMI>=20 && BMI<=25)
   {
    alert("you are healthy")
   }else if (BMI<25){
    alert("you are underweight")
   }else{
    alert("you are overweight")
   }
}elseif(age>=35 && age<=44)
{
  if(BMI>=21 && BMI<=26)
  {
    alert("you are healthy")
  }else if (BMI<21){
    alert("you are underweight")
  }else{
    alert("you are overweight")
  }
}elseif(age>=45 && age<=54)
{
  if(BMI>=22 && BMI<=27)
  {
    alert("you are healthy")
  }else if (BMI<22){
    alert("you are underweight")
  }else{
    alert("you are overweight")
  }
}elseif(age>=55 && age<=64)
{
  if(BMI>=23 && BMI<=28)
  {
    alert("you are healthy")
  }else if(BMI<23){
    alert("you are underweight")
  }else{
    alert("you are overweight")
  }
}elseif(age>64)
{
  if(BMI>=24 && BMI<=29)
  {
    alert("you are healthy")
  }else if (BMI<24){
    alert("you are underweight")
  }else{
    alert("you are overweight")
  }
}



