/**
 * loops are repetition/iteration of a statement
 * based on the condition given
 * it only ends when the condition becomes false
 * it includes increment or decrement
 * to increase or decrease the number of iterations
 *
 * types of loop
 *
 * while
 * do-while
 * for
 *
 *
 *    while(condition){
       //statement
       increment / decrement
       }
 *
       do{
       //statement
       increment / decrement
       }while(condition)
*

     for(initalization; condition; increment/decrement){
     //statement 
     }
eg
      for (let i = 0; i < 10; i++){
      //console.log(i)
      }
 */

//while loop
let i = 0;
while (i < 20) {
  //statement
  console.log(i);
  i++;
}

//do while loops
do {
  //statement
  console.log(i);
  i++;
} while (i > 20);

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
