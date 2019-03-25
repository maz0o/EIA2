
function welcomemessage(): void {
  let person: string = prompt("Please enter your name");
  if (person == null) {
    console.log("User canceled input")
  } else {
    outputusername(person)
  }
}

function outputusername(person2: string): void {
  document.getElementById("username").innerHTML = "Hello " + person2 + " how are you today nice to meet you"; 
  console.log("Hello " + person2 + " how are you today nice to meet you");
}
