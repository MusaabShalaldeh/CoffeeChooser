//locks out the user until they agree to the site's terms
var userAgreement = prompt("Do you agree to the terms of service for site ? Please answer with yes kindly.")

while(userAgreement != "yes")
{
  userAgreement = prompt("Please answer with yes to be able to use this site.")
}


var coffeeType;
var sugarAmmount; // default amount

function Order()
{
    coffeeType = prompt("What is your desired coffee name")
    sugarAmmount = prompt("How much sugar would you like to add ? 0 = none, 50 = half, 100 = max ammount of sugar")
    

    if(coffeeType === "Black" || coffeeType === "Latte" || coffeeType === "Cappuccunio" || coffeeType === "Americano" || coffeeType === "Espresso")
    {
      // Continue with the rest of the code
      alert("Your order is going to arrive soon!, printing your order info...")
      PrintOutInfo()
    }
    else{
      // error out, ask the user to input again.
      alert("You orderd something that we don't serve...")
    }
    
}

function PrintOutInfo()
{

  //save user's choice on the page\
  document.write('<h3>' + 'Your Orderd Coffee: '+ coffeeType + "</h3>")
  
  //cap sugar ammount to 100
  if(sugarAmmount > 100)
    sugarAmmount = 100
  
  //save sugar ammount on the site
  document.write('<h3>' + 'Sugar Amount You Chose: '+ sugarAmmount + "</h3>")

  document.write('<h3>' + 'Wait Time: Forever'+ "</h3>")


  document.write("<a href="+"https://musaabshalaldeh.github.io/CoffeeChooser/"+">Back To Main Page</a>")
}



function RequestDrinks()
{
  var desiredAmount = prompt("How many drinks would you like to request?")

  if(isNaN(desiredAmount))
  {
    alert("Please enter a valid number...")
  }
  else{
    
    for(var i = 0;i < desiredAmount;i++)
    {
      var number = 1 + i;// dpomg this just to now show first drink as 0..
      document.write("<div><img src='https://previews.123rf.com/images/rastudio/rastudio1708/rastudio170805409/84323262-cup-of-hot-drink-vector-sketch-icon-isolated-on-background-hand-drawn-cup-of-hot-drink-icon-cup-of-h.jpg' height='100px' width='100px'/><h4>New Hot Drink "+ number +"</h4></div>")
    }
  }


document.write("<div><a href="+"https://musaabshalaldeh.github.io/CoffeeChooser/"+">Back To Main Page</a></div>")

}