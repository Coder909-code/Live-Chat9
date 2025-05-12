const chatButton = document.getElementById("chat-button");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

chatButton.addEventListener("click", () => {
  chatWindow.classList.remove("hidden");
  chatButton.classList.add("hidden");
});

closeChat.addEventListener("click", () => {
  chatWindow.classList.add("hidden");
  chatButton.classList.remove("hidden");
});

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (msg) {
    addMessage(msg, "user");
    chatInput.value = "";
    setTimeout(() => {
      addMessage("Thanks for reaching out. How can I help?", "bot");
    }, 800);
  }
});

function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
