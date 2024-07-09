/**
 * DataType
 * so there are two types of datatypes 
 *  primitive and composite 
 *--- Primitive - this holds only on data 
         Types 
           string: this stores alphnumeric data, 
           holding multiple char sets from 
           0 - 9 and A - Z 
           there are encapped in single ordouble 
           quote
           eg mary james is 4

           number: this stores only numberic data
           combinination of both integer and float
           eg 234
              34.5

           boolean: this store data in dual/binary
           state, 
           eg true / false

           null: this is not the presence of zero, 
           just means there are no data present
            currently


 *--- Composite - this is used to hold multiple
  data 
    Types
         Array: this holds multiple data in index
         hence you can access this multiple data 
         based on their index number 
         it is represent by [] - block bracket 
          eg
           ["sam", 45, true]
          
         Object: this is the building block of 
         javascript and it is used to build
         all javascript datatypes, it is the 
         storing of data in property and values 
         and data are being retrieve by calling on
         the property name 
         eg 
          { name: "john", age: 54}
        
        function: this can also be referred to as
        task, job. there are used to write statement 
        or action intended  to be carried out 
        eg 
         
          function name(param1, param2){
           //this is where the statment/action 
           // goes in 
          }

 */

//string
const name = "ada sammy is 4 years";

//number
const age = 345; //integer
const age_two = 23.43; //float

//boolean
var checkTrue = true;
var checkFalse = false;

//null
const null_check = null;

//array
const student_array = ["index0", "index1", "index2"];

//accessed by
console.log(student_array[2]);

//objects
var student_object = {
  name: "sammy",
  age: 34,
  status: false,
  date_of_birth: "19/19/19",
};

//accessed by

console.log(student_object.name);

//function
//closed function
function sleep() {
  console.log("go and sleep");
}

//open function
function sleep_two(start, end) {
  console.log(`go and sleep at ${start} 
  then wake at ${end}`);
}

//acessed or called by

sleep();
sleep_two();
