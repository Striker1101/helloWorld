//Conditional Statements

/**
 * if -
 *   this is used to give only one condition
 *    eg
 *       if(condition){
 *         //statement
 *         }
 *
 * if else
 *     this is used to give dual conditions
 *     eg
 *       if(condition){
 *         //statement
 *         }else{
 *          //statement
 *          }
 * else if(nested if)
 *      this is used to give multiple condition
 *      more than two
 *       if(condition){
 *        //statement
 *        }else if(condition){
 *          //statement
 *        }else if(condition){
 *          //statement
 *        }else{
 *           //this is the default section
 *           //statement
 *         }
 * 
 * switch case - 
 *    this works like nested if - just with a much 
 *    simple to use syntax stucture 
 *
 *   switch(condition) {
      case x:
         // code block
         break;
      case y:
         // code block
         break;
       default:
          // code block
       }
 */

const obi = "boy";
const sarah = "girl";

//if
if (obi == sarah) {
  console.log("both of same gender");
}

//if else
if (obi == sarah) {
  //statement
  console.log("both of same gender");
} else {
  //statement
  console.log("both are not of same gender");
}

const choice = "apple";
//nested if (elseif)
if (choice == "pineapple") {
  //statement
  console.log("your choice is pineapple ");
} else if (choice == " apple") {
  //statement
  console.log("your choice is apple ");
} else if (choice == "orange") {
  //statement
  console.log("your choice is Orange ");
} else {
  //this is the default section
  //statement
  console.log("default, no choice fit ");
}

//switch
switch (choice) {
  case "paw-paw":
    // code block
    console.log("your choice is Paw-Paw ");

  case "apple":
    // code block
    console.log("your choice is Apple ");

  default:
    // code block
    console.log("default, no choice fit ");
}
