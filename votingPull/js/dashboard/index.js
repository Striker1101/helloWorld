document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the current user index from local storage
  const currentUserIndex = localStorage.getItem("currentUserIndex");

  if (currentUserIndex !== null) {
    // Retrieve the users from local storage
    const users = JSON.parse(localStorage.getItem("users"));

    // Get the current user's data
    const currentUser = users[currentUserIndex];

    // Display the username
    const usernameElement = document.getElementById("username");
    usernameElement.textContent = `Welcome, ${currentUser.username}!`;
  } else {
    // Handle case where no user is logged in
    const usernameElement = document.getElementById("username");
    usernameElement.textContent = "Welcome, Guest!";
  }
});
