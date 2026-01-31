let number = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  let msg = document.getElementById("message");

  if (guess === number) {
    msg.innerText = "🎉 Correct!";
  } else {
    msg.innerText = "❌ Try again";
  }
}
