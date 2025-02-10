let usersName = prompt("Welcome, what is your first name?");
usersName = usersName.toUpperCase();

console.log(`Hello ${usersName}! Welcome to my website!`);

let message = document.getElementById("message");

message.innerHTML = `Hello ${usersName}! Welcome to my simple webpage!`;
