// Dark mode toggle
document.getElementById("toggle-dark").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Animate popping and floating text
document.querySelectorAll(".pop").forEach(el => el.classList.add("pop-animate"));
document.querySelectorAll(".float").forEach(el => el.classList.add("float-animate"));

// Chatbot functionality
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

chatbotSend.onclick = () => {
  const msg = chatbotInput.value.trim();
  if (!msg) return;

  const userMsg = document.createElement('div');
  userMsg.textContent = `You: ${msg}`;
  chatbotMessages.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.textContent = `Yamkela: Thanks for your message! I’ll get back to you soon.`;
  chatbotMessages.appendChild(botMsg);

  // Send to Formspree
  fetch("https://formspree.io/f/maylqlkr", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: msg,
      email: "lusithiyamkela@gmail.com"
    })
  });

  chatbotInput.value = '';
};

