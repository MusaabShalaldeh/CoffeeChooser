var coffeeType;
var sugarAmmount; // default amount

function Order()
{
    coffeeType = prompt("What is your desired coffee name")
    sugarAmmount = prompt("How much sugar would you like to add ? 0 = none, 50 = half, 100 = max ammount of sugar")
    

    if(coffeeType === "Black" || coffeeType === "Latte" || coffeeType === "Cappuccunio" || coffeeType === "Americano" || coffeeType === "Espresso")
    {
      // Continue with the rest of the code
      alert("Your order is going to arrive soon!, saving your info for later references...")
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