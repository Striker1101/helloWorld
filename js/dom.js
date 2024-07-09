//read element
let nothing = document.getElementById("static");
nothing.textContent = "this is a dynamic file";
nothing.style.color = "green";

let queryID = document.querySelector("#queryID");
queryID.style.color = "green";

let queryClass = document.querySelector(".queryClass");
queryClass.style.color = "green";

let boxs = document.querySelectorAll(".box");
console.log(boxs);

//write
document.write("<h1>this is written from javascript </h1>");

//create element
const grettings = document.createElement("div");
grettings.textContent = "this is a welcoming gretting";

//append
document.getElementById("container").appendChild(grettings);

// adding style
const cats = document.getElementById("cats");
cats.style.cssText = "background-color: yellow; padding: 5px;";

cats.setAttribute("style", "color: red;");

cats.style.fontSize = "larger";

//EVENT
const vanish = document.getElementById("vanish");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
btn.addEventListener("dblclick", btnClick);

function btnClick() {
  //vanish functionality
  let display = vanish.style.display;
  if (display == "none") {
    vanish.style.display = "block";
  } else {
    vanish.style.display = "none";
  }
}

// form.submit = function (event) {
//   //submit functionality
//   //stop the default behaviour of the form

// };

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");
});
