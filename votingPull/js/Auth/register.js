const reply = document.getElementById("reply");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", register);

//add users to local storage
if (localStorage.getItem("users") == null) {
  localStorage.setItem("users", []);
}

function register(e) {
  e.preventDefault();

  //validation
  if (password.textContent.length < 4) {
    reply.textContent = "Please increase your password length";
    reply.style.cssText = "background-color:red; color:white;";
  }

  //register user on browser

  //get users from local storage
  const users = JSON.parse(localStorage.getItem("users"));

  //create a users data
  const data = {
    username,
    email,
    password,
  };

  //push new created user
  const newUser = users.push(data);

  //set to local storage -> user
  localStorage.setItem("users", JSON.stringify(users));
}
