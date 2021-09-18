//Get user input for first name, state (2 letters), and temprature in Farenheit
let firstName = prompt ('What is your first name?')
let userState = prompt ('What state do you loive in (2 letter abbreviation i.e. NE)?')
let userTemp = Number (prompt('What is the temprature outside in degrees Farenheit?'))

//Store messages
const messages = [];
messages[0]= "wear a warm coat, hat, scarf and gloves.";
messages[1]= "wear a warm coat but you won't need a hat, scarf or gloves.";
messages[2]= "wear your warmest coat, a warm hat, a scarf, and warm gloves.";
messages[3]= "wear a warm coat, hat and gloves. Maybe a scarf too."

switch (true) {
case (userTemp < 32 && userState == "NE"):
    console.log(messages[0])
      break
  
case (userTemp >=32 && userTemp <= 50 && userState == "NE"):
    console.log(messages[1])
      break
      
case (userTemp >=32 && userTemp <= 50 && userState == "FL"):
    console.log(messages[2])
      break
      
case (userTemp >=50 && userTemp <=70 && userState == "FL"):
    console.log(messages[3])
      break
      
default:
    console.log("Please Try Again!")
      }
  //Done
    