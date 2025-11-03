const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const responses = {
  "open": "Wij zijn open van maandag tot vrijdag van 9u tot 18u.",
  "uren": "Onze openingsuren zijn van 9u tot 18u, maandag tot vrijdag.",
  "retour": "Je kan je product binnen 14 dagen terugsturen in originele staat.",
  "terugsturen": "Geen probleem! Stuur het product terug binnen 14 dagen.",
  "klacht": "Vervelend om te horen! Mail ons op support@trainh.be en we lossen het op.",
  "probleem": "Geen stress! Stuur een mailtje naar support@trainh.be met je vraag."
};

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add(sender);
  msg.textContent = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  for (let key in responses) {
    if (input.includes(key)) return responses[key];
  }
  return "Sorry, ik begrijp je vraag niet helemaal. Kan je het anders formuleren?";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;
  appendMessage("user", text);
  const reply = getBotResponse(text);
  setTimeout(() => appendMessage("bot", reply), 500);
  userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
